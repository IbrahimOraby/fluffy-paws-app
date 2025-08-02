import React from "react";
import Reviews from "../../ui/Reviews/Reviews";
import ShelterInfo from "./components/ShelterInfo";
import Booking from "./components/Booking";
import AboutShelter from "./components/AboutShelter";
const Shelter = () => {
  return (
    <>
      <div className="grid grid-cols-12 mb-12 px-8 md:px-0">
        <div className=" col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8">
        <ShelterInfo />
        </div>

        <div
          className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-10
      col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8
      "
        >
          <div className="flex-1 max-w-xl">
            <AboutShelter />
          </div>

          <div className="w-full  mx-auto max-w-sm">
            <Booking />
          </div>
        </div>
      </div>

      <Reviews />
    </>
  );
};

export default Shelter;
