import React, { useState } from "react";
import FilledButton from "../Buttons/FilledButton";

const Select = ({ options, title,className="" , containerClass=""}) => {
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  const handleOptionSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={`relative inline-block text-left ${containerClass}` }>
      <FilledButton
        onClick={() => setOpen(!open)}
        className={`btn w-25 capitalize bg-white text-primary-color hover:bg-primary-hover ${className}`}
      >
        {selected||title}
      </FilledButton>

      {open && (
        <ul className="absolute z-10 mt-2 w-52 menu rounded-box bg-base-100 shadow">
          {options.map((option, index) => (
            <li key={index}>
              <button
                className="w-full text-left"
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
