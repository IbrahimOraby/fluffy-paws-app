import React from "react";
import Heading from "../../../ui/Typography/Heading/Heading";

export default function PaymentMethod() {
  return (
    <div className="w-full  flex justify-center items-center">
      <div className="flex flex-col items-center gap-6 max-w-4xl w-full">
        <Heading className="text-center text-xl sm:text-2xl">
          Select Payment Method
        </Heading>

        <div className="flex flex-wrap justify-center items-center gap-4 w-full">
          <img
            className="h-10 sm:h-14 object-contain"
            src="/src/assets/images/visa.jpeg"
            alt="Visa"
          />
          <img
            className="h-10 sm:h-14 object-contain"
            src="/src/assets/images/mastercard.jpeg"
            alt="MasterCard"
          />
          <img
            className="h-10 sm:h-14 object-contain"
            src="/src/assets/images/paypal2.jpeg"
            alt="PayPal"
          />
        </div>
      </div>
    </div>
  );
}
