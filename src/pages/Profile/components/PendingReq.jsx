import React from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import FilledButton from "../../../ui/Buttons/FilledButton";
import LinkButton from "../../../ui/Buttons/LinkButton";

export default function PendingReq({ booking, onApprove, onDecline }) {
  const ownerName = booking.customer ? `${booking.customer.firstName} ${booking.customer.lastName}` : "N/A";
  const fromDate = booking.fromDate ? new Date(booking.fromDate.toDate()).toLocaleDateString() : "N/A";
  const toDate = booking.toDate ? new Date(booking.toDate.toDate()).toLocaleDateString() : "N/A";

  return (
    <div className="p-4 rounded-lg flex justify-between items-center bg-light-color">
      <div>
        {booking.pets && booking.pets.length > 0 && (
          <div className="flex flex-col gap-1">
            {booking.pets.map((pet, index) => (
              <Paragraph key={index} className="text-paragraph-md">
                <span className="text-paragraph-color">Pet {index + 1}:</span> {pet.name} ({pet.breed})
              </Paragraph>
            ))}
          </div>
        )}

        <Paragraph className="text-paragraph-md mt-2">
          <span className="text-gray-600">Owner:</span> {ownerName}
        </Paragraph>
        
        <Paragraph className="text-paragraph-xs text-paragraph-color mt-4">
          <span className="text-gray-600">Date:</span> {fromDate} to {toDate}
        </Paragraph>
        
        <Paragraph className="text-paragraph-xs text-paragraph-color">
          <span className="text-gray-600">Nights:</span> {booking.nights}
        </Paragraph>
      </div>

      <div className="flex gap-2">
        <FilledButton
          className="px-4 py-1 bg-primary-color text-white-color rounded transition-all duration-300 ease-in-out hover:bg-hover-color"
          onClick={() => onApprove(booking.id)}
        >
          Approve
        </FilledButton>
        <LinkButton 
        className="border-2 border-primary-color"
        onClick={() => onDecline(booking.id)}
        >
          Decline
        </LinkButton>
      </div>
    </div>
  );
}