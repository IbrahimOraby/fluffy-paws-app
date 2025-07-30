import React, { useState } from "react";
import StepTracker from "./components/StepTracker";
import BookingDetails from "./components/BookingDetails";
import PaymentCard from "./components/PaymentCard";

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="p-4">
      <StepTracker currentStep={currentStep} />

      {currentStep === 1 && <BookingDetails setCurrentStep={setCurrentStep} />}
      {currentStep === 2 && <PaymentCard />}
    </div>
  );
}
