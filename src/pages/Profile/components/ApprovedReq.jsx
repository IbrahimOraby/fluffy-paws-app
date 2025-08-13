import React from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function ApprovedReq({ booking }) {
  const ownerName = booking.customer ? `${booking.customer.firstName} ${booking.customer.lastName}` : "N/A";
  const fromDate = booking.fromDate ? new Date(booking.fromDate.toDate()).toLocaleDateString() : "N/A";
  const toDate = booking.toDate ? new Date(booking.toDate.toDate()).toLocaleDateString() : "N/A";

  return (
    <div className="p-4 rounded-lg bg-blue-50">
      <div className="flex flex-col gap-1">
        {booking.pets && booking.pets.length > 0 ? (
          booking.pets.map((pet, index) => (
            <Paragraph key={index} className="text-paragraph-md">
              <span className="text-paragraph-color">Pet {index + 1}: </span>
              {pet.name} ({pet.breed})
            </Paragraph>
          ))
        ) : (
          <Paragraph className="text-paragraph-md">
            <span className="text-paragraph-color">Pets: </span>
            N/A
          </Paragraph>
        )}
      </div>
      <Paragraph className="text-paragraph-md mt-2">
        <span className="text-paragraph-color">Owner: </span>
        {ownerName}
      </Paragraph>
      <Paragraph className="text-paragraph-xs text-paragraph-color mt-4">
        Date: {fromDate} to {toDate}
      </Paragraph>
      <Paragraph className="text-paragraph-xs text-paragraph-color">
        Nights: {booking.nights}
      </Paragraph>
    </div>
  );
}