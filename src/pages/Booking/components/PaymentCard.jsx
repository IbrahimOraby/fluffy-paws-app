import React from "react";
import PaymentMethod from "./PaymentMethod";
import BookingDetailsForm from "./BookingDetailsForm";
import PaymentForm from "./PaymentForm";

export default function PaymentCard() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 ">
      <div className=" max-w-4xl  bg-gray-100 border rounded-3xl border-gray-300 shadow-md p-6 flex flex-col gap-6 sm:gap-10">
        <div>
          <PaymentMethod />
        </div>
        <div>
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}
