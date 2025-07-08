import React from 'react';

function Inputs({ text, fontSize = '16px', fontWeight = 'normal' }) {
  const style = {
    fontSize,
    fontWeight,
  };

  return (
    <div className="flex flex-col gap-1 mb-4">
      <label htmlFor="inp" style={style} className="text-gray-700">
        {text}
      </label>
      <input
        type="text"
        id="inp"
        className="input border px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        style={style}
      />
    </div>
  );
}

export default Inputs;
