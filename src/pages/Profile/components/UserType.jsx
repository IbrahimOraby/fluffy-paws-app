import React from "react";
import Heading from "../../../ui/Typography/Heading/Heading";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import ProfileSectionHeader from "./ProfileSectionHeader";
import MessageItem from "./MessageItem";
import PetProfileCard from "./PetProfileCard";
import FilledButton from "../../../ui/Buttons/FilledButton";
import BookingCardProfile from "./BookingCardProfile";
import FavouriteProfileCard from "./FavouriteProfileCard";

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
        <div className="flex items-start justify-between">
          <div>
            <ProfileSectionHeader
              title="Your Beloved Pets"
              subTitle="Here you can add, edit, or remove your pet's profiles."
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <PetProfileCard
            petName="Buddy"
            breedAge="Golden Retriever, 3 years old"
            description=" Needs daily walks and loves treats."
          />
          <PetProfileCard
            petName="Whiskers"
            breedAge="Calico Cat, 5 years old"
            description="Quiet, loves sunbathing."
          />
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
          <FavouriteProfileCard
            name="Sitter Emily R."
            //   imageUrl={}
            description="Experienced dog walker and boarder."
          />
          <FavouriteProfileCard
            name="The Happy Paws Shelter"
            //   imageUrl={}
            description="Spacious facilities for all pets."
          />
        </div>
      </div>
    </>
  );
}
