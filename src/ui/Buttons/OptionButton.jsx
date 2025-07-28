import React from 'react'

// This component renders a customizable button.
// You can pass your own background color, text color, or any other Tailwind utility classes via the `className` prop.

export default function OptionButton({ title, className = "" ,...props}) {
  return (
    <button
     className={`btn border-0 ${className}`}
     {...props}
     >
      {title}
    </button>
  );
}
