import React, { useEffect, useState } from "react";
import data from "../../../data/shelterData.json";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import { StaticStarIcon } from "../../../ui/Icons/StaticIcons";

export default function ShelterInfo() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div className="grid grid-cols-12 mb-12 px-8 md:px-0">
      <div className="col-span-12 col-start-1 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 ">
        <SubHeading className="text-subheader-lg mb-2">{info.name}</SubHeading>
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
              <img
                src={img}
                className="w-70 h-70 object-cover"
                alt={`Shelter image ${index + 1}`}
              />
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
    </div>
  );
}
