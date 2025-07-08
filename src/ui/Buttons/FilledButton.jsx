import React from "react";

export default function FilledButton({ title }) {
  return (
    <>
      <button class="btn 
      capitalize
       bg-primary-color
        border-0
        text-white
        hover:bg-hover-color
        ">
        {title}
      </button>
    </>
  );
}
