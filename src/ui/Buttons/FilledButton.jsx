import React from "react";

export default function FilledButton({ className = "", children, ...props }) {

  return (
    <>
      <button
        className={`btn 
      capitalize
      border-0
        ${className}
        `}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
