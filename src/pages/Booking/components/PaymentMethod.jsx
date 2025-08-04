import React, { useState } from "react";
import Heading from "../../../ui/Typography/Heading/Heading";
import PaymentMethodCard from "./PaymentMethodCard";
const paymentOptions = [
  { img: "/src/assets/images/visa.jpeg", value: "visa" },
  { img: "/src/assets/images/paypal2.jpeg", value: "paypal" },
  { img: "/src/assets/images/mastercard.jpeg", value: "mastercard" },
];
export default function PaymentMethod() {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full  flex justify-center items-center">
      <div className="flex flex-col items-center gap-6 max-w-4xl w-full">
        <Heading className="text-center text-xl sm:text-2xl">
          Select Payment Method
        </Heading>

        <div className="flex flex-wrap justify-center items-center gap-4 w-full">
          {paymentOptions.map((option) => (
            <PaymentMethodCard
              key={option.value}
              img={option.img}
              value={option.value}
              name="payment"
              selected={selected === option.value}
              onChange={() => setSelected(option.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
