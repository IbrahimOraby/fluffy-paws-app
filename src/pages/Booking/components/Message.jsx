import React from "react";
import Heading from "../../../ui/Typography/Heading/Heading";
import Textarea from "../../../ui/Inputs/Textarea";

export default function Message() {
  return (
    <div>
      <Heading className="text-lg font-semibold mb-3">
        Write a brief message to Anna
      </Heading>
      <Textarea placeholder="Hi there, wondering if you're available to take care of my sleepy, old Labrador over the long weekend? Thanks in advance!" />
    </div>
  );
}
