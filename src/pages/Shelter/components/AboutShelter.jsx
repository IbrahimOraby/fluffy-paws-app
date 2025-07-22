import React, { useEffect, useState } from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import data from "../../../data/shelterData.json";
import Heading from "../../../ui/Typography/Heading/Heading";

export default function AboutShelter() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);
  return (
    <div className="bg-[#fef3f2] p-4 rounded-lg shadow-sm border border-[#fcd4d1]">
      <Heading className="text-lg font-semibold mb-2">About</Heading>
      <Paragraph className="text-sm text-gray-700 leading-relaxed">
        {info.about}
      </Paragraph>
    </div>
  );
}
