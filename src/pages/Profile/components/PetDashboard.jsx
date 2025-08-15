import React from "react";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import PetDisplayCard from "./PetDisplayCard"; 

export default function PetDashboard({ allBookings }) {
  const allPets = allBookings.flatMap(booking =>
    booking.pets ? booking.pets.map(pet => ({ ...pet })) : []
  );

  return (
    <>
      <div className="mt-6">
        <Heading className="text-header-sm mb-3 text-primary-color">
          All Boarded Pets
        </Heading>
        {allPets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPets.map((pet, index) => (
              <div key={pet.id || index}>
                <PetDisplayCard pet={pet} />
              </div>
            ))}
          </div>
        ) : (
          <Paragraph className="text-paragraph-color text-paragraph-sm text-center">
            No pets have been boarded with your organization yet.
          </Paragraph>
        )}
      </div>
    </>
  );
}