import React from "react";

export default function ButtonWithIcon({ icon, className="" }) {
  return (
    <button className={`btn btn-circle ${className}` }>
     {icon}
    </button>
  );
}
