import React from "react";

export default function LinkButton({ children, className = "", ...props }) {
  return (
    <>
      <button
        className={`btn 
        btn-link
      capitalize
      text-primary-color
       no-underline
       ${className}
        `}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
