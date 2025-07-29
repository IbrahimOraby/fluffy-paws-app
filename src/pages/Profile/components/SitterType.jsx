import React, { useState } from "react";
import ProfileSectionHeader from "./ProfileSectionHeader";
import MessageItem from "./MessageItem";
import UserProfileCard from "./UserProfileCard";
import PendingReq from "./PendingReq";
import ApprovedReq from "./ApprovedReq";
import PastReq from "./PastReq";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import FilledButton from "../../../ui/Buttons/FilledButton";
import galleryImg from "../../../assets/images/pexels-charlesdeluvio-1851164.jpg";

export default function SitterType() {
  const [pending, setPending] = useState([
    {
      id: 1,
      name: "Max",
      date: "2025-08-02",
      owner: "Sarah Johnson",
    },
  ]);

  const [approved, setApproved] = useState([
    {
      id: 2,
      name: "Bella",
      date: "2025-08-15",
      owner: "John Smith",
    },
  ]);
  ``;

  const [past, setPast] = useState([
    {
      id: 3,
      name: "Charlie",
      date: "2025-07-10",
      owner: "Lina George",
    },
  ]);

  const handleApprove = (id) => {
    const booking = pending.find((b) => b.id === id);
    setApproved([...approved, booking]);
    setPending(pending.filter((b) => b.id !== id));
  };

  const handleDecline = (id) => {
    setPending(pending.filter((b) => b.id !== id));
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
          fullName="John Doe"
          email="john.doe@example.com"
          phoneNumber="+1 (555) 123-4567"
          address="123 Main St, Anytown, USA"
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
            {pending.length > 0 ? (
              pending.map((booking) => (
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
            {approved.length > 0 ? (
              approved.map((booking) => (
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
            Past Bookings
          </Heading>
          <div className="space-y-4">
            {past.length > 0 ? (
              past.map((booking) => (
                <PastReq key={booking.id} booking={booking} />
              ))
            ) : (
              <Paragraph className="text-paragraph-color text-paragraph-sm text-center">
                No past bookings yet.
              </Paragraph>
            )}
          </div>
        </div>
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
          <FilledButton className="bg-primary-color text-white-color rounded-3xl">
            Add new images
          </FilledButton>
        </div>

        {/* Gallery images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {/* Dummy gallery images */}
          <img
            src={galleryImg}
            alt="Gallery"
            className="w-full object-cover rounded-lg"
          />
          <img
            src={galleryImg}
            alt="Gallery"
            className="w-full object-cover rounded-lg"
          />
          <img
            src={galleryImg}
            alt="Gallery"
            className="w-full object-cover rounded-lg"
          />
          <img
            src={galleryImg}
            alt="Gallery"
            className="w-full object-cover rounded-lg"
          />
          <img
            src={galleryImg}
            alt="Gallery"
            className="w-full object-cover rounded-lg"
          />
          <img
            src={galleryImg}
            alt="Gallery"
            className="w-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* ############ Messages Input ############ */}
      <input
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
        {/* Message list goes here */}
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
      </div>
    </>
  );
}
