import React, { useEffect, useState } from "react";
import ProfileSectionHeader from "./ProfileSectionHeader";
import MessageItem from "./MessageItem";
import PetProfileCard from "./PetProfileCard";
import FilledButton from "../../../ui/Buttons/FilledButton";
import BookingCardProfile from "./BookingCardProfile";
import FavouriteProfileCard from "./FavouriteProfileCard";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  getCurrentUserDoc,
  getPetDocs,
  updateClientData,
} from "../../../services/firestore_service";
import useUserStore from "../../../store/useUserStore";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import MyTextInput from "../../../ui/Inputs//MyTextInput";
import ClientProfileCard from "./ClientProfileCard";

export default function UserType() {
  const { user, userDoc, loading: userLoading } = useUserStore();
  const [clientData, setClientData] = useState(null);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchClientData = async () => {
      if (user && userDoc && userDoc.role === "client") {
        setLoading(true);
        try {
          const data = await getCurrentUserDoc(user);
          setClientData(data);
          // console.log("@@@@@",data);
          const petsData = await getPetDocs(user.uid);
          setPets(petsData);
          console.log("Client Data fetched:", data);
          console.log("Pets Data fetched:", petsData);
        } catch (error) {
          console.error("Error fetching client data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchClientData();
  }, [user, userDoc]);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phoneNumber: Yup.string()
      .matches(/^\+?[0-9]{10,15}$/, "Invalid phone number format")
      .notRequired(),
    address: Yup.string().notRequired(),
  });

  if (userLoading || loading) {
    return <div>Loading organization data...</div>;
  }

  if (!clientData) {
    return <div>No client data found.</div>;
  }

  return (
    <>
      {/* ############ MyProfile Input ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="My Profile"
        defaultChecked
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <div className="flex items-center justify-between">
          {" "}
          <div>
            {" "}
            <ProfileSectionHeader
              title="Your Profile"
              subTitle="Manage your personal information and preferences."
            />
          </div>
          <div>
            {" "}
            <FilledButton
              className="bg-primary-color text-white rounded-3xl"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </FilledButton>
          </div>
        </div>
        {isEditing ? (
          <Formik
            initialValues={{
              firstName: clientData.firstName || "",
              lastName: clientData.lastName || "",
              email: clientData.email || "",
              phoneNumber: clientData.phoneNumber || "",
              address: clientData.address || "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                await updateClientData(user.uid, values);
                setClientData(values);
                setIsEditing(false);
              } catch (error) {
                console.error("Failed to update user data:", error);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <MyTextInput label="First Name" name="firstName" type="text" />
                <MyTextInput label="Last Name" name="lastName" type="text" />
                <MyTextInput label="Email Address" name="email" type="email" />
                <MyTextInput
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                />
                <MyTextInput label="Address" name="address" type="text" />
                <FilledButton
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary-color text-white rounded-3xl"
                >
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </FilledButton>
              </Form>
            )}
          </Formik>
        ) : (
          <ClientProfileCard
            avatarSrc={clientData.avatarSrc}
            fullName={`${clientData.firstName || ""} ${
              clientData.lastName || ""
            }`}
            email={clientData.email || "N/A"}
            phoneNumber={clientData.phoneNumber || "N/A"}
            address={clientData.address || "N/A"}
          />
        )}
      </div>

      {/* ############ MyPets Input ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="My Pets"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <div className="flex items-start justify-between">
          <div>
            <ProfileSectionHeader
              title="Your Beloved Pets"
              subTitle="Here you can edit your pet's profiles."
            />
          </div>
          <FilledButton
            className="bg-primary-color rounded-3xl text-white-color transition-all duration-300 ease-in-out hover:bg-hover-color"
            onClick=""
          >
            Add Pet
          </FilledButton>
        </div>
        {/* Pet cards goes here */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {pets.length > 0 ? (
            pets.map((pet) => <PetProfileCard key={pet.id} pet={pet} />)
          ) : (
            <div className="text-center w-full">
              <Paragraph className="text-paragraph-color text-paragraph-sm">
                No pets added yet. Click "Add Pet" to get started!
              </Paragraph>
            </div>
          )}
        </div>
      </div>

      {/* ############ Bookings Input ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Bookings"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <ProfileSectionHeader
          title="Your Bookings"
          subTitle="View the status of your current and past boarding bookings."
        />
        {/* Booking list goes here */}
        <ul className="mt-4 space-y-3">
          <BookingCardProfile
            title="Buddy's Stay with Sitter Jane"
            dates="July 20 - July 25, 2025"
            status="Confirmed"
            statusType="success"
          />
          <BookingCardProfile
            title="Whiskers at Shelter Paws"
            dates="August 10 - August 15, 2025"
            status="Pending"
            statusType="warning"
          />
        </ul>
      </div>

      {/* ############ Favourite Input ############ */}
      {/* <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Favourites"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <ProfileSectionHeader
          title="Your Favourites"
          subTitle="Keep track of your preferred sitters and shelters here for easy
          re-booking."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <FavouriteProfileCard
            name="Sitter Emily R."
            //   imageUrl={}
            description="Experienced dog walker and boarder."
          /> */}
      {/* <FavouriteProfileCard
            name="The Happy Paws Shelter"
            //   imageUrl={}
            description="Spacious facilities for all pets."
          /> */}
      {/* </div>
      </div> */}
    </>
  );
}
