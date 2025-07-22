import React from "react";
import ShelterCard from "./components/ShelterCard";
import FiltersMenu from "./components/FiltersMenu";
import Heading from "../../ui/Typography/Heading/Heading";

const Shelters = () => {
  return (
    <>
      <FiltersMenu />
      <div className="grid grid-cols-12 gap-y-7 ">
        <div className="col-start-2 col-span-full md:col-start-4">
          <Heading className=" text-header-md text-header-color ">
            Pet siters in Port Said
          </Heading>
          <Heading className="text-header-sm text-header-color ">
            272 Pet Sitters
          </Heading>
        </div>

        <div className="col-start-2 md:col-start-4">
          <ShelterCard />
          <ShelterCard />
          <ShelterCard />
          <ShelterCard />
          <ShelterCard />
          <ShelterCard />
        </div>
      </div>
    </>
  );
};

export default Shelters;
