import React from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function PastReq({ booking }) {
  return (
    <div className="p-4 rounded-lg bg-gray-100">
      <Paragraph className="text-paragraph-md">
        <span className="text-paragraph-color">Pet: </span>
        {booking.name}
      </Paragraph>
      <Paragraph className="text-paragraph-md">
        <span className="text-paragraph-color">Owner: </span>
        {booking.owner}
      </Paragraph>
      <Paragraph className="text-paragraph-xs text-paragraph-color mt-4">
        Date: {booking.date}
      </Paragraph>
    </div>
  );
}
