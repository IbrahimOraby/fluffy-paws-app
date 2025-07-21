import React, { useEffect, useState } from "react";
import data from "../../../data/shelterData.json";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import { Icon } from "lucide-react";
import { StaticStarIcon } from "../../../ui/Icons/StaticIcons";
import Rating from "../../../ui/Rating/Rating";

export default function ShelterInfo() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div className="mb-6 px-15">
      <SubHeading className="text-subheader-lg mb-2"> {info.name} </SubHeading>
      <div className="flex items-center gap-1 mb-4">
        <StaticStarIcon size={18} color="#F7C457" fill="#F7C457" />

        <Paragraph className="text-paragraph-sm text-paragraph-color">
          ({info.rating})
        </Paragraph>
        <Paragraph className="text-paragraph-sm text-primary-color">
          {info.location}
        </Paragraph>
      </div>
      <div className="carousel rounded-box mb-6">
        {info.gallery?.map((img, index) => (
          <div key={index} className="carousel-item">
            <img src={img} className="w-70 h-70 object-cover" />
          </div>
        ))}
      </div>

      <Paragraph className="text-paragraph-lg mb-4">
        Caring and Experienced Pet sitter / Dog walker
      </Paragraph>

      <div className="card max-w-[600px] bg-light-color card-xs shadow-sm">
        <div className="card-body">
          <Paragraph className="text-paragraph-md">About</Paragraph>
          <Paragraph className="text-paragraph-xs text-paragraph-color">
            {info.about}
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
