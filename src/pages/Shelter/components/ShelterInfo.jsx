import React, { useEffect, useState } from "react";
import data from "../../../data/shelterData.json";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import { StaticStarIcon } from "../../../ui/Icons/StaticIcons";
import Gallery from "./Gallery";

export default function ShelterInfo() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(data);
  }, []);

  return (
    <div className="">
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

      <Gallery images={info.gallery} />

      <Paragraph className="text-paragraph-lg mb-4">
        Caring and Experienced Pet sitter / Dog walker
      </Paragraph>
    </div>
  );
}
