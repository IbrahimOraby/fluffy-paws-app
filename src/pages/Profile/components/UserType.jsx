import React from "react";
import Heading from "../../../ui/Typography/Heading/Heading";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import ProfileSectionHeader from "./ProfileSectionHeader";
import MessageItem from "./MessageItem";

export default function UserType() {
  return (
    <>
      {/* ############ Dashboard Input ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="Dashboard"
        defaultChecked
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <ProfileSectionHeader
          title="Welcome, Pet Parent"
          subTitle="Here you can quickly see your upcoming bookings, recent messages, and
          a summary of your pets."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-light-color p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2">Upcoming Bookings</h3>
            <p>
              You have <strong>2</strong> upcoming bookings.
            </p>
            <button className="btn btn-sm bg-primary-color mt-3">
              View Details
            </button>
          </div>
          <div className="card bg-light-color p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2">Recent Messages</h3>
            <p>
              You have <strong>3</strong> unread messages.
            </p>
            <button className="btn btn-sm bg-primary-color mt-3">
              Read Messages
            </button>
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

      {/* ############ MyPets Input ############ */}
      <input
        type="radio"
        name="dashboard_tabs"
        className="tab text-lg"
        aria-label="My Pets"
      />
      <div className="tab-content border-base-300 bg-base-100 p-10">
        <ProfileSectionHeader
          title="Your Beloved Pets"
          subTitle="Here you can add, edit, or remove your pet's profiles."
        />
        {/* Pet list/cards goes here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Buddy</h3>
            <p>Golden Retriever, 3 years old</p>
            <p className="text-sm text-gray-600">
              Needs daily walks and loves treats.
            </p>
            <button className="btn btn-sm btn-info mt-3 mr-2">Edit</button>
            <button className="btn btn-sm btn-error mt-3">Delete</button>
          </div>
          <div className="card bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">Whiskers</h3>
            <p>Calico Cat, 5 years old</p>
            <p className="text-sm text-gray-600">Quiet, loves sunbathing.</p>
            <button className="btn btn-sm btn-info mt-3 mr-2">Edit</button>
            <button className="btn btn-sm btn-error mt-3">Delete</button>
          </div>
        </div>
        <button className="btn btn-primary mt-6">Add New Pet</button>
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
          <li className="p-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <p className="font-medium">Buddy's Stay with Sitter Jane</p>
              <p className="text-sm text-gray-600">July 20 - July 25, 2025</p>
            </div>
            <span className="badge badge-success">Confirmed</span>
          </li>
          <li className="p-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
            <div>
              <p className="font-medium">Whiskers at Shelter Paws</p>
              <p className="text-sm text-gray-600">
                August 10 - August 15, 2025
              </p>
            </div>
            <span className="badge badge-warning">Pending</span>
          </li>
        </ul>
      </div>

      {/* ############ Favourite Input ############ */}
      <input
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
        {/* Favourites list goes here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="card bg-white p-4 rounded-lg shadow-sm flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Sitter Profile"
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="font-medium">Sitter Emily R.</h3>
              <p className="text-sm text-gray-600">
                Experienced dog walker and boarder.
              </p>
            </div>
          </div>
          <div className="card bg-white p-4 rounded-lg shadow-sm flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Shelter Profile"
              className="rounded-full mr-4"
            />
            <div>
              <h3 className="font-medium">The Happy Paws Shelter</h3>
              <p className="text-sm text-gray-600">
                Spacious facilities for all pets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
