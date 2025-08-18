import React from "react";
import SubHeading from "../../../ui/Typography/SubHeadings/SubHeading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function BookingCardProfile({ booking, status, statusType }) {
  const fromDate = booking.bookingData?.fromDate
    ? new Date(
        booking.bookingData.fromDate.toDate
          ? booking.bookingData.fromDate.toDate() 
          : booking.bookingData.fromDate
      ).toLocaleDateString()
    : "N/A";

  const toDate = booking.bookingData?.toDate
    ? new Date(
        booking.bookingData.toDate.toDate
          ? booking.bookingData.toDate.toDate()
          : booking.bookingData.toDate
      ).toLocaleDateString()
    : "N/A";

  const dates = `${fromDate} - ${toDate}`;

  const providerName = booking.bookingData?.shelterName || "N/A";

  const petNames =
    booking.bookingData?.pets && booking.bookingData.pets.length > 0
      ? booking.bookingData.pets.map((pet) => pet.name).join(", ")
      : "No pets";

  const title = `Booking for ${petNames} with ${providerName}`;

  return (
    <li className="p-3 bg-white rounded-lg shadow-sm flex justify-between items-center">
      <div>
        <SubHeading className="text-subheader-md text-header-color mb-1">
          {title}
        </SubHeading>
        <Paragraph className="text-paragraph-sm text-paragraph-color">
          {dates}
        </Paragraph>
      </div>
      <span className={`badge badge-${statusType}`}>{status}</span>
    </li>
  );
}
