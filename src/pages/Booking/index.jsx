import React from "react";
import BookingDetails from "./components/BookingDetails";
import PaymentMethod from "./components/PaymentMethod";
import PaymentCard from "./components/PaymentCard";

export default function Booking() {
  return (
    <div>
      <BookingDetails />
      <PaymentCard />
    </div>
  );
}
