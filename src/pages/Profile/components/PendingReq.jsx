import React from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import FilledButton from "../../../ui/Buttons/FilledButton";
import LinkButton from "../../../ui/Buttons/LinkButton";

export default function PendingReq({ booking, onApprove, onDecline }) {
  return (
    <div className="p-4 border-primary-color border-2 rounded-lg flex justify-between items-center bg-light-color">
      <div>
        <Paragraph className="text-paragraph-md">
          <span className="text-paragraph-color">Pet:</span> {booking.name}
        </Paragraph>

        <Paragraph className="text-paragraph-md">
          <span className="text-gray-600">Owner:</span> {booking.owner}
        </Paragraph>

        <Paragraph className="text-paragraph-md">
          <span className="text-gray-600">Date:</span> {booking.date}
        </Paragraph>
      </div>

      <div className="flex gap-2">
        <FilledButton
          className="px-4 py-1 bg-primary-color text-white-color rounded transition-all duration-300 ease-in-out hover:bg-hover-color"
          onClick={() => onApprove(booking.id)}
        >
          Approve
        </FilledButton>
        <LinkButton className="border-2  border-primary-color">
          Decline
        </LinkButton>
      </div>
    </div>
  );
}
