import React, { useEffect, useState } from "react";
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
  updateBookingStatus,
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

  // const [pendingBookings, setPendingBookings] = useState([]);
  // const [approvedBookings, setApprovedBookings] = useState([]);
  // const [pastBookings, setPastBookings] = useState([]);

  const [incomingBookings, setIncomingBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);

  useEffect(() => {
    const fetchOrganizationData = async () => {
      if (user && userDoc && userDoc.role === "org") {
        setLoading(true);
        try {
          const data = await getOrginzationDoc(user.uid);
          setOrganizationData(data);

          const { pending, approved, past } = await getOrganizationBookings(
            user.uid
          );
          setPendingBookings(pending);
          setApprovedBookings(approved);
          setPastBookings(past);

          console.log("Pending Bookings:", pending);
          console.log("Approved Bookings:", approved);
          console.log("Past Bookings:", past);
        } catch (error) {
          console.error("Error fetching organization data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchOrganizationData();
  }, [user, userDoc]);

  if (userLoading || loading) {
    return <div>Loading organization data...</div>;
  }

  if (!organizationData) {
    return <div>No organization data found.</div>;
  }

  const handleApprove = async (bookingId) => {
    try {
      await updateBookingStatus(bookingId, "approved");
      const approvedBooking = pendingBookings.find((b) => b.id === bookingId);
      setPendingBookings(pendingBookings.filter((b) => b.id !== bookingId));
      setApprovedBookings([
        ...approvedBookings,
        { ...approvedBooking, paymentStatus: "approved" },
      ]);
    } catch (error) {
      console.error("Failed to approve booking:", error);
    }
  };

  const handleDecline = async (bookingId) => {
    try {
      await updateBookingStatus(bookingId, "cancelled");
      const declinedBooking = pendingBookings.find((b) => b.id === bookingId);
      setPendingBookings(pendingBookings.filter((b) => b.id !== bookingId));
      setPastBookings([
        ...pastBookings,
        { ...declinedBooking, paymentStatus: "failed" },
      ]);
    } catch (error) {
      console.error("Failed to decline booking:", error);
    }
  };

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

      {/* ############ Reservations Input ############ */}
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
        {/* Pending Requests */}
        <div className="mt-6">
          <Heading className="text-header-sm mb-3 text-primary-color">
            Pending Requests
          </Heading>
          <div className="space-y-4">
            {pendingBookings.length > 0 ? (
              pendingBookings.map((booking) => (
                <PendingReq
                  key={booking.id}
                  booking={booking}
                  onApprove={handleApprove}
                  onDecline={handleDecline}
                />
              ))
            ) : (
              <Paragraph className="text-paragraph-color text-paragraph-sm text-center">
                No pending requests.
              </Paragraph>
            )}
          </div>
        </div>
        {/* Approved Bookings */}
        <div className="mt-10">
          <Heading className="text-header-sm mb-3 text-blue-900">
            Upcoming Bookings
          </Heading>
          <div className="space-y-4">
            {approvedBookings.length > 0 ? (
              approvedBookings.map((booking) => (
                <ApprovedReq key={booking.id} booking={booking} />
              ))
            ) : (
              <Paragraph className="text-paragraph-color text-paragraph-sm text-center">
                No upcoming bookings.
              </Paragraph>
            )}
          </div>
        </div>
        {/* Past Bookings */}
        <div className="mt-10">
          <Heading className="text-header-sm mb-3 text-header-color">
            Cancelled Bookings
          </Heading>
          <div className="space-y-4">
            {pastBookings.length > 0 ? (
              pastBookings.map((booking) => (
                <PastReq key={booking.id} booking={booking} />
              ))
            ) : (
              <Paragraph className="text-paragraph-color text-paragraph-sm text-center">
                No cancelled bookings yet.
              </Paragraph>
            )}
          </div>
        </div>
      </div>

      {/* ############ Pets Dashboard Input ############ */}
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
        <PetDashboard
          pendingBookings={pendingBookings}
          approvedBookings={approvedBookings}
        />
      </div>

      {/* ############ Gallery Input ############ */}
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

      {/* ############ More Info Input ############ */}
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
          <Paragraph className="text-paragraph-color text-paragraph-sm">
            From:{" "}
            {new Date(organizationData.availableFrom).toLocaleDateString()}{" "}
            <br />
            To: {new Date(organizationData.availableTo).toLocaleDateString()}
          </Paragraph>
        </div>

        {/* Banking Information */}
        <div className="mt-6">
          <Heading className="text-header-sm mb-2 text-blue-900">
            Banking Info
          </Heading>
          <Paragraph className="text-paragraph-color text-paragraph-sm">
            Bank Name: {organizationData.banking.bankName} <br />
            Account Holder: {organizationData.banking.accountHolderName} <br />
            Account Number: {organizationData.banking.accountNumber} <br />
            IBAN: {organizationData.banking.iban} <br />
            Routing Number: {organizationData.banking.bankRoutingNumber}
          </Paragraph>
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

      {/* ############ Messages Input ############ */}
      {/* <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Messages"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <ProfileSectionHeader
          title="Your Messages"
          subTitle="Manage all your conversations with sitters and shelters here."
        />
        <ul className="mt-4 space-y-3">
          <MessageItem
            sender="Sitter John"
            messageSnippet="Looking forward to boarding Buster!"
            timestamp="2 hours ago"
          />
          <MessageItem
            sender="Shelter Haven"
            messageSnippet="Confirming your booking for Luna."
            timestamp="Yesterday"
          />
        </ul>
      </div> */}
    </>
  );
}
