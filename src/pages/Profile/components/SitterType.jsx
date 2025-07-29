import React, { useState } from "react";
import ProfileSectionHeader from "./ProfileSectionHeader";
import MessageItem from "./MessageItem";
import UserProfileCard from "./UserProfileCard";
import PendingReq from "./PendingReq";
import ApprovedReq from "./ApprovedReq";
import PastReq from "./PastReq";

export default function SitterType() {
  const [pending, setPending] = useState([
    {
      id: 1,
      name: "Max",
      date: "2025-08-02",
      owner: "Sarah Johnson",
    },
    {
      id: 2,
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
          <h3 className="text-xl font-semibold mb-3 text-yellow-600">
            Pending Requests
          </h3>
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
              <p className="text-gray-500">No pending requests.</p>
            )}
          </div>
        </div>

        {/* Approved Bookings */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3 text-green-600">
            Upcoming Bookings
          </h3>
          <div className="space-y-4">
            {approved.length > 0 ? (
              approved.map((booking) => (
                <ApprovedReq key={booking.id} booking={booking} />
              ))
            ) : (
              <p className="text-gray-500">No upcoming bookings.</p>
            )}
          </div>
        </div>

        {/* Past Bookings */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-3 text-gray-600">
            Past Bookings
          </h3>
          <div className="space-y-4">
            {past.length > 0 ? (
              past.map((booking) => (
                <PastReq key={booking.id} booking={booking} />
              ))
            ) : (
              <p className="text-gray-500">No past bookings yet.</p>
            )}
          </div>
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
