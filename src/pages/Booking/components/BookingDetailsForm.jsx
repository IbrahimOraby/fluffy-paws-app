import React from "react";
import { Formik, Form } from "formik";
import { differenceInCalendarDays, parseISO } from "date-fns";

import Heading from "../../../ui/Typography/Heading/Heading";
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

export default function BookingDetailsForm({ sitter, defaultBooking = {} }) {
  const dailyRate = sitter.info.price || 50;
  const firebaseUser = useUserStore((s) => s.user);
  const userDoc = useUserStore((s) => s.userDoc);
  const userId = firebaseUser?.uid || "";
  const firstName = userDoc?.firstName || "";
  const lastName = userDoc?.lastName || "";
  const email = userDoc?.email || firebaseUser?.email || "";
  const phone = firebaseUser?.phoneNumber || "+201111111111";
  const pets = userDoc?.pets || [];
  return (
    <Formik
      initialValues={{
        location: defaultBooking.location ?? sitter.location ?? "",
        fromDate: defaultBooking.fromDate
          ? new Date(defaultBooking.fromDate)
          : "",
        toDate: defaultBooking.toDate ? new Date(defaultBooking.toDate) : "",
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
          /*   Paymob expects piasters (EGP × 100) */
          const amount = nights * dailyRate;

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
              fromDate: values.fromDate,
              toDate: values.toDate,
              petIds: pets.map((p) => p.id),
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
      {({ isSubmitting }) => (
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
          <div className="flex gap-2 flex-wrap">
            <PetCard />
          </div>

          {/* Submit */}
          <FilledButton
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-color text-white rounded-xl w-full"
          >
            {isSubmitting ? "Processing…" : "Book now"}
          </FilledButton>
        </Form>
      )}
    </Formik>
  );
}
