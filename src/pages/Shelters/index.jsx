import React, { useEffect } from "react";
import ShelterCard from "./components/ShelterCard";
import FiltersMenu from "./components/FiltersMenu";
import Heading from "../../ui/Typography/Heading/Heading";
import sheltersData from "../Shelters/shelterdata";
import { useLocation } from "react-router-dom";

const Shelters = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const location = queryParams.get("location")?.toLowerCase();
  const animal = queryParams.get("animal")?.toLowerCase();
  const startDate = new Date(queryParams.get("startDate"));
  const endDate = new Date(queryParams.get("endDate"));

  const filteredShelters = sheltersData.filter((shelter) => {
    const matchesLocation = location
      ? shelter.city.toLowerCase().includes(location)
      : true;

    const matchesAnimal = animal
      ? shelter.pets.map((pet) => pet.toLowerCase()).includes(animal)
      : true;

   
    const [sDay, sMonth] = shelter.startdate.split("/").map(Number);
    const [eDay, eMonth] = shelter.enddate.split("/").map(Number);
    const shelterStart = new Date(2025, sMonth - 1, sDay);
    const shelterEnd = new Date(2025, eMonth - 1, eDay);

    const matchesDate =
      !isNaN(startDate) &&
      !isNaN(endDate) &&
      startDate >= shelterStart &&
      endDate <= shelterEnd;

    return matchesLocation && matchesAnimal && matchesDate;
  });

  return (
    <>
      <FiltersMenu />
      <div className="grid grid-cols-12 gap-y-7">
        <div className="col-start-2 col-span-full md:col-start-4">
          <Heading className=" text-header-md text-header-color ">
            Pet sitters in {location || "Egypt"}
          </Heading>
          <Heading className="text-header-sm text-header-color ">
            {filteredShelters.length} Pet Sitters
          </Heading>
        </div>

      <div className="col-start-2 md:col-start-4">
  {filteredShelters.length > 0 ? (
    filteredShelters.map((shelter) => (
      <ShelterCard key={shelter.id} {...shelter} />
    ))
  ) : (
    <p className="text-gray-500 text-lg mt-6 w-full col-start-8 md:col-start-4">
      No pet sitters found matching your filters.
    </p>
  )}
</div>

      </div>
    </>
  );
};

export default Shelters;
