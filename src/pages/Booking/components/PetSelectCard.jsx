import React from "react";
import Heading from "../../../ui/Typography/Heading/Heading";

/**
 * PetSelectCard
 * - Checkbox-based card to allow multi-select.
 * - Centers the pet name vertically next to the image.
 */
export default function PetSelectCard({
  photoUrl,
  title,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  className = "",
}) {
  return (
    <label
      className={` relative card card-side px-3 py-2 gap-5 cursor-pointer transition-all duration-200
  border-2 ${checked ? "border-[#BE5985]" : "border-gray-300"}
  rounded-md shadow-none !outline-none items-center
  ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  ${className}`}
    >
      {/* Use checkbox to support multi-select */}
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="absolute opacity-0 pointer-events-none appearance-none focus:outline-none focus:ring-0"
      />

      <figure className="flex items-center">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={title || "pet"}
            className="w-14 h-14 rounded-full object-cover border border-gray-200"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600">
            No photo
          </div>
        )}
      </figure>

      <div className="card-body p-1 justify-center">
        <Heading as="h3" className="card-title text-[#565656]">
          {title}
        </Heading>
      </div>
    </label>
  );
}
