import React from "react";
import animalImg from "../../../assets/images/pexels-charlesdeluvio-1851164.jpg";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";

export default function FavouriteProfileCard({ imageUrl, name, description }) {
  return (
    <div className="card bg-white p-4 rounded-lg shadow-sm flex items-center">
      <img
        src={imageUrl ? imageUrl : animalImg}
        alt="shelter Image"
        className="rounded-[50%] w-30 mb-4"
      />
      <div className="text-center">
        <SubHeading className="text-subheader-lg text-header-color">
          {name}
        </SubHeading>
        <Paragraph className="text-paragraph-sm text-paragraph-color">
          {description}
        </Paragraph>
      </div>
    </div>
  );
}
