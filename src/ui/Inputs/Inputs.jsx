import React from "react";

function Inputs({ label, field, meta, className = "", children, ...props }) {
  // Fallback to props.name if no field is provided
  const inputName = field?.name || props.name || props.id || "";

  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && (
        <label htmlFor={inputName} className={className}>
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={`input input-bordered w-full focus:outline-none  ${
            meta?.touched && meta?.error ? "input-error" : ""
          } ${className}`}
          {...field}
          {...props}
        />
        {children}
      </div>
      {
        <div
          className={`text-error text-sm mt-1 h-5 invisible ${
            meta?.touched && meta?.error && `visible`
          }`}
        >
          {meta.error}
        </div>
      }
    </div>
  );
}

export default Inputs;
