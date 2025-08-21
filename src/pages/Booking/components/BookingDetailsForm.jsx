import React from "react";
import { Formik, Form } from "formik";
import { differenceInCalendarDays, parseISO } from "date-fns";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import FilledButton from "../../../ui/Buttons/FilledButton";
import PetCard from "./PetCard";
import FormikCalendarInput from "./FormikCalendarInput";
import MyTextInput from "../../../ui/Inputs/MyTextInput";
import { bookingSchema } from "../../../schemas/bookingDetailsSchema";
import { initiatePayment } from "../../../services/paymentService";
import useClientStore from "../../../store/clientStore";
import useUserStore from "../../../store/useUserStore";
import PetRadioCard from "./PetSelectCard";
import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import PetSelectCard from "./PetSelectCard";

export default function BookingDetailsForm({ sitter, defaultBooking = {} }) {
  const dailyRate = sitter.info.price || 99;
  const shelterName = sitter.info.name;
  const firebaseUser = useUserStore((s) => s.user);
  const userDoc = useUserStore((s) => s.userDoc);
  const userId = firebaseUser?.uid || "";
  const firstName = userDoc?.firstName || "";
  const lastName = userDoc?.lastName || "";
  const email = userDoc?.email || firebaseUser?.email || "";
  const phone = firebaseUser?.phoneNumber || "+201111111111";
  const defaultPetCount = defaultBooking?.petCount || 1;
  const [pets, setPets] = useState([]);
  const [petsLoading, setPetsLoading] = useState(true);

  useEffect(() => {
    if (!firebaseUser?.uid) {
      setPets([]);
      return;
    }
    const colRef = collection(db, "users", firebaseUser.uid, "pets");
    const unsubscribe = onSnapshot(
      colRef,
      (snap) => {
        const rows = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        setPets(rows);
        setPetsLoading(false);
      },
      (err) => {
        console.error(err);
        setPetsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [firebaseUser?.uid]);

  const pickPetPreview = (p) => ({
    ...p,
    photoUrl: p.photo?.photo?.cdnUrl || p.photo?.cdnUrl || p.photoUrl || "",
  });

  return (
    <Formik
      initialValues={{
        location: defaultBooking.location ?? sitter.location ?? "",
        fromDate: defaultBooking.fromDate
          ? new Date(defaultBooking.fromDate)
          : "",
        toDate: defaultBooking.toDate ? new Date(defaultBooking.toDate) : "",
        petCount: defaultPetCount,
        selectedPetIds: [],
        shelterName: "",
      }}
      validationSchema={bookingSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true);

          /*   Calculate number of nights */
          const nights = differenceInCalendarDays(
            values.toDate,
            values.fromDate
          );
          const amount = nights * dailyRate * values.petCount;
          console.log(amount);
          console.log(defaultPetCount);
          console.log(shelterName);

          //  pets selected (FULL DATA, not all pets!)
          const selectedIds = values.selectedPetIds || [];
          const selectedPetsFull = pets
            .filter((p) => selectedIds.includes(p.id))
            .map(pickPetPreview);

          /*  Build payload to send to backend */
          const payload = {
            userId: userId,
            shelterId: sitter.uid || "unknown-shelter",
            amount,
            userData: {
              firstName,
              lastName,
              email,
              phone,
            },
            bookingData: {
              location: values.location,
              fromDate: values.fromDate?.toISOString?.() || values.fromDate,
              toDate: values.toDate?.toISOString?.() || values.toDate,
              nights, // << duration
              petCount: values.petCount,
              petIds: selectedIds,
              pets: selectedPetsFull,
              shelterName: shelterName,
            },
          };

          /*   Call backend → get Paymob iframe URL */
          const iframeUrl = await initiatePayment(payload);

          /*   Redirect browser to Paymob hosted page */
          window.location.href = iframeUrl;
        } catch (err) {
          console.error("Payment initiation failed:", err);
          // TODO: toast / alert for user
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => {
        const maxSelectable = Number(values.petCount) || 1;

        const togglePet = (id) => {
          const selected = values.selectedPetIds || [];
          const isSelected = selected.includes(id);

          if (!isSelected && selected.length >= maxSelectable) return;

          const next = isSelected
            ? selected.filter((x) => x !== id)
            : [...selected, id];
          setFieldValue("selectedPetIds", next);
        };

        return (
          <Form className="flex flex-col gap-4 w-full">
            <Heading className="text-lg font-semibold mb-3">
              Booking details
            </Heading>

            {/* Location */}
            <MyTextInput name="location" placeholder="Location" />

            {/* Dates */}
            <div className="flex flex-col sm:flex-row gap-2 w-full justify-around mb-4">
              <FormikCalendarInput name="fromDate" />
              <FormikCalendarInput name="toDate" />
            </div>

            <Paragraph className="text-sm text-gray-500 text-center sm:text-left">
              Make sure your pet profile is complete before sending the request
            </Paragraph>

            {/* User's pet cards */}
            {petsLoading ? (
              <Paragraph className="text-sm text-gray-500">
                Loading pets…
              </Paragraph>
            ) : pets.length === 0 ? (
              <Paragraph className="text-sm text-gray-500">
                No pets found.
              </Paragraph>
            ) : (
              <div className="flex justify-center gap-3 flex-wrap">
                {pets.map((p, idx) => {
                  const id = p.id || p.uid || `pet-${idx}`;
                  const petName = p.name || "Pet";
                  const photo =
                    p.photo?.photo?.cdnUrl ||
                    p.photo?.cdnUrl ||
                    p.photoUrl ||
                    "";

                  return (
                    <PetSelectCard
                      key={id}
                      name="selectedPetIds"
                      value={id}
                      title={petName}
                      photoUrl={photo}
                      checked={(values.selectedPetIds || []).includes(id)}
                      disabled={
                        !(values.selectedPetIds || []).includes(id) &&
                        (values.selectedPetIds || []).length >= maxSelectable
                      }
                      onChange={() => togglePet(id)}
                    />
                  );
                })}
              </div>
            )}

            {/* Submit */}
            <FilledButton
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-color text-white rounded-xl w-full"
            >
              {isSubmitting ? "Processing…" : "Book now"}
            </FilledButton>
          </Form>
        );
      }}
    </Formik>
  );
}
