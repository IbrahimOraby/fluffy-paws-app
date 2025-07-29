import React from "react";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function BookingCardProfile({
  title,
  dates,
  status,
  statusType,
}) {
  return (
    <>
      <li className="p-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
        <div>
          <SubHeading className="text-subheader-md text-header-color mb-1">{title}</SubHeading>
          <Paragraph className="text-paragraph-sm text-paragraph-color">{dates}</Paragraph>
        </div>
        <span className={`badge badge-${statusType}`}>{status}</span>
      </li>
    </>
  );
}
