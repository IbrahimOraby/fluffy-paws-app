import React from "react";

export default function PaymentMethodCard({
  img,
  name,
  value,
  selected,
  onChange,
}) {
  return (
    <label
      tabIndex="-1"
      className={`card bg-white card-side p-4 gap-4 cursor-pointer transition-all duration-200 rounded-xl items-center 
        ${
          selected ? "border-2 border-[#be5985]" : "border border-gray-300"
        } shadow-md  focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 ring-0  `}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected}
        onChange={onChange}
        className="hidden"
      />
      <img src={img} alt={value} className="h-6 sm:h-8 object-contain" />
    </label>
  );
}
