import React, { useEffect, useState } from "react";
import ProfileSectionHeader from "./ProfileSectionHeader";
import MessageItem from "./MessageItem";
import PetProfileCard from "./PetProfileCard";
import FilledButton from "../../../ui/Buttons/FilledButton";
import BookingCardProfile from "./BookingCardProfile";
import FavouriteProfileCard from "./FavouriteProfileCard";
import UserProfileCard from "./UserProfileCard";
import {
  getCurrentUserDoc,
  getPetDocs,
} from "../../../services/firestore_service";
import useUserStore from "../../../store/useUserStore";

export default function UserType() {
  const { user, userDoc, loading: userLoading } = useUserStore();
  const [clientData, setClientData] = useState(null);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <ProfileSectionHeader
          title="Your Profile"
          subTitle="Manage your personal information and preferences."
        />
        <UserProfileCard
          fullName={`${clientData.firstName} ${clientData.lastName}`}
          email={clientData.email}
          // phoneNumber={clientData.firstName}
          // address="123 Main St, Anytown, USA"
        />
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
