import React from "react";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function PetDisplayCard({ pet }) {
  const { name, breed, age, gender, photoUrl } = pet;
  const vaccinations = pet.health?.vaccinations && Array.isArray(pet.health.vaccinations)
  ? pet.health.vaccinations
  : [];
  return (
    <div className="card bg-base-100 shadow-xl border border-light-color p-6 flex flex-col items-center text-center">
      <div className="mb-4">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={name}
            className="w-32 h-32 object-cover rounded-full border-4 border-primary-color"
          />
        ) : (
          <div className="w-32 h-32 flex items-center justify-center bg-gray-300 rounded-full text-gray-500 text-4xl border-4 border-primary-color">
            🐾
          </div>
        )}
      </div>
      <div className="card-body p-0">
        <SubHeading className="card-title text-subheader-lg text-primary-color justify-center mb-1">
          {name}
        </SubHeading>
        <Paragraph className="text-paragraph-color text-paragraph-sm">
          {breed}, {age} years old
        </Paragraph>
        <div className="divider my-2"></div>
        <div className="flex flex-col space-y-2 text-paragraph-color text-sm text-left w-full">
          <Paragraph>
            Gender:{" "}
            <span className="font-semibold text-header-color">{gender}</span>
          </Paragraph>
          <Paragraph>
            Weight:{" "}
            <span className="font-semibold text-header-color">
              {pet.weight} kg
            </span>
          </Paragraph>
          <Paragraph>
            Health Status:{" "}
            <span className="font-semibold text-header-color">
              {pet.health?.conditions || "N/A"}
            </span>
          </Paragraph>
          {vaccinations.length > 0 && (
            <div className="flex flex-col">
              <Paragraph className="font-medium">Vaccinations</Paragraph>
              <ul className="list-disc list-inside ml-2">
                {vaccinations.map((vac, index) => (
                  <li key={index}>
                    <Paragraph className="text-sm font-semibold text-header-color">
                      {vac}
                    </Paragraph>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
