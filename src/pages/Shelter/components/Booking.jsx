import React, { useEffect, useState } from "react";
import CalendarInput from "../../../ui/Inputs/CalendarInput";
import Dropdown from "../../../ui/Inputs/Dropdown";
import NumberInput from "../../../ui/Inputs/NumberInput";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import FilledButton from "../../../ui/Buttons/FilledButton";
import data from "../../../data/shelterData.json";

export default function Booking() {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    setPrice(data.pricePerNight);
  }, []);

  return (
    <div className="w-full max-w-sm border border-gray-300 rounded-xl p-4 shadow-sm bg-white">
      <div className="mb-4">
        <Heading className="text-lg sm:text-xl font-semibold mb-2">
          Pet hosting
        </Heading>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <Paragraph>Your pet will stay at the hotel</Paragraph>
          <Paragraph className="font-medium text-black">${price}</Paragraph>
        </div>
      </div>

      <div className="space-y-1">
        <div>
          <Dropdown options={["Cat", "Dog", "Kitten", "Puppy"]} />
        </div>

        <div>
          <NumberInput />
        </div>
        <div className="flex flex-row justify-center items-end gap-4 flex-wrap">
          <div className="w-full max-w-[160px]">
            <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
              From
            </label>
            <div className="flex justify-center">
              <CalendarInput width="w-35" />
            </div>
          </div>

          <div className="w-full max-w-[160px]">
            <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
              To
            </label>
            <div className="flex justify-center">
              <CalendarInput width="w-35" />
            </div>
          </div>
        </div>

        <div className="pt-2 flex flex-col items-center">
          <FilledButton title="Done" />
          <Paragraph className="text-xs text-gray-500 mt-1 text-center">
            You will be redirected to payment page
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
