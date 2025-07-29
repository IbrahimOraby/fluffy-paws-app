import React from "react";

export default function PendingReq({ booking, onApprove, onDecline }) {
  return (
    <div
      className="p-4 border rounded-lg flex justify-between items-center bg-yellow-50"
    >
      <div>
        <p className="font-medium">
          <span className="text-gray-600">Pet:</span> {booking.name}
        </p>
        <p>
          <span className="text-gray-600">Owner:</span> {booking.owner}
        </p>
        <p>
          <span className="text-gray-600">Date:</span> {booking.date}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          className="px-4 py-1 bg-green-600 text-white rounded"
          onClick={() => onApprove(booking.id)}
        >
          Approve
        </button>
        <button
          className="px-4 py-1 bg-red-500 text-white rounded"
          onClick={() => onDecline(booking.id)}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
