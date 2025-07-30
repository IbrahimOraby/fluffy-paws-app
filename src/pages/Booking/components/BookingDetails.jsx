import React from "react";
import BookingDetailsForm from "./BookingDetailsForm";
import Heading from "../../../ui/Typography/Heading/Heading";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";
import Textarea from "../../../ui/Inputs/Textarea";
import Message from "./Message";

export default function BookingDetails({ setCurrentStep }) {
  return (
    <div className="w-full min-h-screen flex justify-center items-center p-4 ">
      <div className=" max-w-4xl  bg-white border rounded-3xl border-gray-300 shadow-md p-6 flex flex-col gap-6 sm:gap-10">
        {/* Header (Image + Name + Rating) */}
        <div className="flex items-center gap-4 border rounded-full bg-white border-gray-300 p-2">
          <div className="w-24 h-24 rounded-full overflow-hidden ">
            <img
              src="https://randomuser.me/api/portraits/women/79.jpg"
              alt="Anna R."
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <Heading className="text-xl sm:text-2xl font-semibold  text-primary-color">
              Anna R.
            </Heading>
            <Paragraph className="text-sm text-gray-500">
              ⭐ 0.0 (0 Ratings) &nbsp;&nbsp;&nbsp; 56$/day
            </Paragraph>
          </div>
        </div>
        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          {/* Left - Booking form */}
          <div className="flex-1 ">
            <BookingDetailsForm setCurrentStep={setCurrentStep} />
          </div>

          {/* Right - Message */}
          <div className="flex-1">
            <Message />
          </div>
        </div>
      </div>
    </div>
  );
}
