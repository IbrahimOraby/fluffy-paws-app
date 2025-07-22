import React from "react";

export default function FilledButton({ className = "", children, ...props }) {

  return (
    <>
      <button
        className={`btn 
      capitalize
        ${className}
        `}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
