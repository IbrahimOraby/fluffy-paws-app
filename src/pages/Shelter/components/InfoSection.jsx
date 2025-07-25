import React, { useEffect, useState } from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import data from "../../../data/shelterData.json";

export default function InfoSection() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(data);
  }, []);
  return (
    <div>
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
