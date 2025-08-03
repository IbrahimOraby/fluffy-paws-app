import React, { useState } from "react";
import { useField } from "formik";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function FormikCalendarInput({ label, ...props }) {
  const [field, meta, helpers] = useField(props);
  const [isOpen, setIsOpen] = useState(false);

  const formatDate = (date) => {
    return date
      ? `${String(date.getDate()).padStart(2, "0")} ${date.toLocaleString(
          "en-US",
          {
            month: "short",
          }
        )}`
      : "";
  };

  return (
    <div className="relative w-fit">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-2 border px-3 py-2 rounded-md shadow-sm w-[120px] cursor-pointer ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5M9 13h6"
          />
        </svg>
        <input
          type="text"
          readOnly
          value={formatDate(field.value)}
          className="bg-transparent text-sm outline-none w-full"
          placeholder="DD / MMM"
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 bg-white mt-2 rounded-md shadow-md border">
          <DayPicker
            mode="single"
            selected={field.value}
            onSelect={(date) => {
              helpers.setValue(date);
              setIsOpen(false);
            }}
          />
        </div>
      )}

      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs mt-1">{meta.error}</div>
      )}
    </div>
  );
}
