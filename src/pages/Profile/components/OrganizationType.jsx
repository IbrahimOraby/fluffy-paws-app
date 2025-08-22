import React, { useEffect, useState, useCallback } from "react";
import { Formik, Form } from "formik";
import ProfileSectionHeader from "./ProfileSectionHeader";
import UserProfileCard from "./UserProfileCard";
import PendingReq from "./PendingReq";
import ApprovedReq from "./ApprovedReq";
import PastReq from "./PastReq";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import FilledButton from "../../../ui/Buttons/FilledButton";
import {
  getOrginzationDoc,
  updateOrganizationGallery,
  getOrganizationBookings,
} from "../../../services/firestore_service";
import useUserStore from "../../../store/useUserStore";
import MyMultiFileInput from "../../../ui/Inputs/MyMultiFileInput";
import LinkButton from "../../../ui/Buttons/LinkButton";
import PetDashboard from "./PetDashboard";

export default function OrganizationType() {
  const { user, userDoc, loading: userLoading } = useUserStore();
  const [organizationData, setOrganizationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditingGallery, setIsEditingGallery] = useState(false);
  const [allBookings, setAllBookings] = useState([]);
  const [activeTab, setActiveTab] = useState("incoming");

  const fetchOrganizationData = useCallback(async () => {
    if (user && userDoc && userDoc.role === "org") {
      setLoading(true);
      try {
        const [orgData, bookingsData] = await Promise.all([
          getOrginzationDoc(user.uid),
          getOrganizationBookings(user.uid),
        ]);
        setOrganizationData(orgData);
        setAllBookings(bookingsData);
      } catch (error) {
        console.error("Error fetching organization data:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [user, userDoc]);

  useEffect(() => {
    fetchOrganizationData();
  }, [fetchOrganizationData]);

  if (userLoading || loading) {
    return <div>Loading organization data...</div>;
  }

  if (!organizationData) {
    return <div>No organization data found.</div>;
  }

  const now = new Date();
  const incomingBookings = allBookings.filter(
    (booking) => booking.toDate && new Date(booking.toDate.toDate()) >= now
  );
  const pastBookings = allBookings.filter(
    (booking) => booking.toDate && new Date(booking.toDate.toDate()) < now
  );

  const renderBookingContent = () => {
    const bookingsToShow =
      activeTab === "incoming" ? incomingBookings : pastBookings;
    const isIncoming = activeTab === "incoming";
    const headerText = isIncoming ? "Incoming Bookings" : "Past Bookings";
    const noBookingsText = isIncoming
      ? "You have no incoming bookings."
      : "No past bookings found.";
    const BookingComponent = isIncoming ? ApprovedReq : PastReq;

    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-primary-color mb-3">
          {headerText}
        </h3>
        <ul className="space-y-3">
          {bookingsToShow.length > 0 ? (
            bookingsToShow.map((booking) => (
              <BookingComponent key={booking.id} booking={booking} />
            ))
          ) : (
            <Paragraph className="text-paragraph-color text-paragraph-sm text-center">
              {noBookingsText}
            </Paragraph>
          )}
        </ul>
      </div>
    );
  };

  return (
    <>
      {/* ############ My Profile ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="My Profile"
        defaultChecked
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <ProfileSectionHeader
          title="Your Profile"
          subTitle="Manage your personal information and preferences."
        />
        <UserProfileCard
          avatarSrc={organizationData.branding.organizationLogo.cdnUrl}
          fullName={organizationData.info.name}
          email={organizationData.info.email}
          phoneNumber={organizationData.contact.phoneNumber}
          address={`${organizationData.contact.street}, ${organizationData.contact.district}, ${organizationData.contact.city}.`}
        />
      </div>

      {/* ############ Bookings ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Reservations"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <ProfileSectionHeader
          title="Your Bookings"
          subTitle="View the status of your current and past boarding bookings."
        />

        <div className="flex justify-center space-x-4 my-6">
          <button
            onClick={() => setActiveTab("incoming")}
            className={`px-2 sm:px-6 py-2 sm:w-50 cursor-pointer rounded-lg hover:bg-primary-color hover:text-white-color transition font-medium ${
              activeTab === "incoming"
                ? "bg-primary-color text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Incoming Booking
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-2 sm:px-6 py-2 sm:w-50 hover:bg-primary-color hover:text-white-color transition cursor-pointer rounded-lg font-medium ${
              activeTab === "past"
                ? "bg-primary-color text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Past Booking
          </button>
        </div>

        <div className="w-full">{renderBookingContent()}</div>
      </div>

      {/* ############ Pets Dashboard ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Pets Dashboard"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <ProfileSectionHeader
          title="Pets Dashboard"
          subTitle="View and manage details of all pets from pending and approved bookings."
        />
        <PetDashboard allBookings={allBookings} />
      </div>

      {/* ############ Gallery ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Gallery"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <div className="flex items-start justify-between">
          <div>
            <ProfileSectionHeader
              title="Gallery"
              subTitle="Showcase your organization’s environment and space."
            />
          </div>
        </div>

        {!isEditingGallery ? (
          <>
            {organizationData.gallery?.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {organizationData.gallery.map((img, index) => (
                  <div key={index} className="rounded overflow-hidden">
                    <img
                      src={img.cdnUrl}
                      alt={`Gallery image ${index + 1}`}
                      className="w-48 h-48 object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <Paragraph className="text-paragraph-color text-paragraph-sm mt-4">
                No images uploaded yet.
              </Paragraph>
            )}

            <FilledButton
              className="bg-primary-color text-white-color rounded-3xl mt-6"
              onClick={() => setIsEditingGallery(true)}
            >
              Edit Images
            </FilledButton>
          </>
        ) : (
          <Formik
            initialValues={{
              gallery: organizationData.gallery || [],
            }}
            onSubmit={async (values, { resetForm }) => {
              try {
                await updateOrganizationGallery(user.uid, values.gallery);
                setOrganizationData((prev) => ({
                  ...prev,
                  gallery: values.gallery,
                }));
                setIsEditingGallery(false);
                resetForm();
              } catch (error) {
                console.error("Error updating gallery:", error);
                alert("Failed to update gallery.");
              }
            }}
          >
            {({ values }) => (
              <Form>
                <MyMultiFileInput
                  name="gallery"
                  label="Upload or remove images"
                />
                <div className="flex gap-2 mt-4">
                  <FilledButton
                    type="submit"
                    className="bg-primary-color text-white-color rounded-3xl"
                  >
                    Save
                  </FilledButton>
                  <LinkButton
                    className="!text-paragraph-color"
                    onClick={() => setIsEditingGallery(false)}
                  >
                    Cancel
                  </LinkButton>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>

      {/* ############ More Info ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="More Info"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <ProfileSectionHeader
          title="More Information"
          subTitle="Detailed organizational data including availability, banking, and documents."
        />

        {/* Availability */}
        <div className="mt-6">
          <Heading className="text-header-sm mb-2 text-primary-color">
            Availability
          </Heading>
          <div className="flex items-center gap-1">
            <Paragraph className="text-paragraph-color text-paragraph-sm">
              From:
            </Paragraph>
            <Paragraph className="text-header-color text-paragraph-md">
              {new Date(organizationData.availableFrom).toLocaleDateString()}
            </Paragraph>
          </div>
          <div className="flex items-center gap-1">
            <Paragraph className="text-paragraph-color text-paragraph-sm">
              To:
            </Paragraph>
            <Paragraph className="text-header-color text-paragraph-md">
              {new Date(organizationData.availableTo).toLocaleDateString()}{" "}
            </Paragraph>
          </div>
        </div>

        {/* Banking Information */}
        <div className="mt-6">
          <Heading className="text-header-sm mb-2 text-blue-900">
            Banking Info
          </Heading>
          <div className="flex items-center gap-1">
            <Paragraph className="text-paragraph-color text-paragraph-sm">
              Bank Name:
            </Paragraph>
            <Paragraph className="text-header-color text-paragraph-md">
              {organizationData.banking.bankName}
            </Paragraph>
          </div>
          <div className="flex items-center gap-1">
            <Paragraph className="text-paragraph-color text-paragraph-sm">
              Account Holder:
            </Paragraph>
            <Paragraph className="text-header-color text-paragraph-md">
              {organizationData.banking.accountHolderName}
            </Paragraph>
          </div>
          <div className="flex items-center gap-1">
            <Paragraph className="text-paragraph-color text-paragraph-sm">
              Account Number:
            </Paragraph>
            <Paragraph className="text-header-color text-paragraph-md">
              {organizationData.banking.accountNumber}
            </Paragraph>
          </div>
          <div className="flex items-center gap-1">
            <Paragraph className="text-paragraph-color text-paragraph-sm">
              IBAN:
            </Paragraph>
            <Paragraph className="text-header-color text-paragraph-md">
              {organizationData.banking.iban}
            </Paragraph>
          </div>
          <div className="flex items-center gap-1">
            <Paragraph className="text-paragraph-color text-paragraph-sm">
              Routing Number:
            </Paragraph>
            <Paragraph className="text-header-color text-paragraph-md">
              {organizationData.banking.bankRoutingNumber}
            </Paragraph>
          </div>
        </div>

        {/* Documents */}
        <div className="mt-6">
          <Heading className="text-header-sm mb-2 text-header-color">
            Legal Documents
          </Heading>
          <ul className="list-disc ml-6 text-paragraph-sm text-paragraph-color">
            <li>
              <a
                href={organizationData.documents.businessLicense.cdnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Business License
              </a>
            </li>
            <li>
              <a
                href={organizationData.documents.insuranceCertificate.cdnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Insurance Certificate
              </a>
            </li>
            <li>
              <a
                href={organizationData.documents.taxId.cdnUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Tax ID
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
