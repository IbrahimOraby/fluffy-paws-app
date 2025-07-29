import React from "react";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function PetProfileCard({ petName, breedAge, description }) {
  return (
    <div className="card bg-white border border-light-color p-4 rounded-lg shadow-sm">
      <SubHeading className="text-subheader-lg mb-2 text-primary-color">{petName}</SubHeading>
      <Paragraph className="text-paragraph-md text-header-color">{breedAge}</Paragraph>
      <Paragraph className="text-paragraph-sm text-paragraph-color">{description}</Paragraph>
    </div>
  );
}
