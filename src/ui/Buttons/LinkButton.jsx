import React from "react";

export default function LinkButton({ title }) {
  return (
    <>
      <button
        class="btn 
        btn-link
      capitalize
      text-primary-color
       no-underline
        "
      >
        {title}
      </button>
    </>
  );
}
