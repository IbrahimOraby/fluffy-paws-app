import React from "react";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function PetProfileCard({ pet }) {
  const {
    name,
    breed,
    toilet,
    friendly,
    diet,
    age,
    gender,
    health,
    desexed,
    weight,
    photo,
  } = pet;

  let vaccinations = [];
  if (health && health.vaccinations) {
    try {
      vaccinations = JSON.parse(health.vaccinations);
    } catch (error) {
      console.error("Failed to parse vaccinations JSON:", error);
    }
  }

  console.log(weight);

  return (
    <div className="card bg-light-color border border-light-color p-6 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        {photo?.photo?.cdnUrl ? (
          <img
            src={photo.photo.cdnUrl}
            alt={name}
            className="w-30 h-30 object-cover rounded-full mr-4 border-2 border-primary-color"
          />
        ) : (
          <div className="w-30 h-30 flex items-center justify-center bg-gray-200 rounded-full mr-4 text-gray-500 text-3xl">
            🐾
          </div>
        )}
        <div>
          <SubHeading className="text-subheader-lg text-primary-color">
            {name}
          </SubHeading>
          <Paragraph className="text-paragraph-sm text-paragraph-color">{`${breed}, ${age} years old.`}</Paragraph>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-paragraph-color">
          <Paragraph className="text-paragraph-sm">
            Gender:{" "}
            <span className="font-semibold text-header-color">{gender}</span>
          </Paragraph>
        </div>
        <div className="flex items-center text-paragraph-color">
          <Paragraph className="text-sm">
            Weight:{" "}
            <span className="font-semibold text-header-color">
              {health.weight} kg
            </span>
          </Paragraph>
        </div>
        <div className="flex items-center text-paragraph-color">
          <Paragraph className="text-sm">
            Friendly:{" "}
            <span className="font-semibold text-header-color">{friendly}</span>
          </Paragraph>
        </div>
        <div className="flex items-center text-paragraph-color">
          <Paragraph className="text-sm">
            Toilet:{" "}
            <span className="font-semibold text-header-color">{toilet}</span>
          </Paragraph>
        </div>
        <div className="flex items-center text-paragraph-color">
          <Paragraph className="text-paragraph-sm">
            Diet:{" "}
            <span className="font-semibold text-header-color">{diet}</span>
          </Paragraph>
        </div>

        <div className="flex items-center text-paragraph-color">
          <Paragraph className="text-sm">
            Desexed:{" "}
            <span className="font-semibold text-header-color">{desexed}</span>
          </Paragraph>
        </div>

        <div className="flex items-center text-paragraph-color">
          <Paragraph className="text-sm">
            Health Status:{" "}
            <span className="font-semibold text-header-color">
              {health.conditions}
            </span>
          </Paragraph>
        </div>

        {vaccinations.length > 0 && (
          <div className="flex items-start text-paragraph-color">
            <div className="flex flex-col">
              <Paragraph className="text-sm font-medium">
                Vaccinations:
              </Paragraph>
              <ul className="list-disc list-inside text-sm mt-1 font-semibold text-header-color">
                {vaccinations.map((vac, index) => (
                  <li key={index}>{vac}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
