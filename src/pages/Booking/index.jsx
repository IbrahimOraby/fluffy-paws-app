import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import StepTracker from "./components/StepTracker";
import BookingDetails from "./components/BookingDetails";
import PaymentCard from "./components/PaymentCard";

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);

  //  Pull the state we passed from the Shelter page
  //     ︎(state contains { shelter, bookingForm })
  const { state } = useLocation();
  const navigate = useNavigate();

  //  If the user lands on /booking directly (without state),
  //     send them back to a safe page and stop rendering.
  if (!state) {
    navigate("/"); // or   navigate(-1)   to go back
    return null; // prevent rendering until redirect happens
  }

  return (
    <div className="p-4">

     
        <BookingDetails
          shelter={state.shelter}
          bookingForm={state.bookingForm}
        />
      

    </div>
  );
}
