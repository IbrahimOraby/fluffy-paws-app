import React from 'react';

function Inputs({ text, className = '' }) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor="inp" className={` ${className}`}>
        {text}
      </label>
      <input
        type="text"
        id="inp"
        className={`input border px-3 py-2 rounded-md outline-none  ${className}`}
      />
    </div>
  );
}


export default Inputs;
