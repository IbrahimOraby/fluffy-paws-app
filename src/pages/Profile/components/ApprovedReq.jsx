import React from "react";

export default function ApprovedReq({booking}) {
  return (
    <div className="p-4 border rounded-lg bg-green-50">
      <p className="font-medium">
        Pet: {booking.name} | Owner: {booking.owner}
      </p>
      <p className="text-sm text-gray-600">Date: {booking.date}</p>
    </div>
  );
}
