import React from "react";
import Reviews from "../../ui/Reviews/Reviews";
import ShelterInfo from "./components/ShelterInfo";
import Booking from "./components/Booking";
import AboutShelter from "./components/AboutShelter";
const Shelter = () => {
  return (
    <>
      <ShelterInfo />

      <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4 mt-10">
        <div className="flex-1 max-w-xl">
          <AboutShelter />
        </div>

        <div className="w-full max-w-sm">
          <Booking />
        </div>
      </div>

      <Reviews />
    </>
  );
};

export default Shelter;
