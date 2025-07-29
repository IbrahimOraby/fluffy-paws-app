import React from "react";
import Paragraph from "../../../ui/Typography/Paragraph/Paragraph";

export default function PetCard() {
  return (
    <div>
      <div className="flex items-center gap-3 border rounded-full border-gray-300 px-3 py-1 w-fit">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Pet"
            className="w-full h-full object-cover"
          />
        </div>
        <Paragraph className="text-sm font-medium text-primary-color">
          3afaf
        </Paragraph>
      </div>
    </div>
  );
}
