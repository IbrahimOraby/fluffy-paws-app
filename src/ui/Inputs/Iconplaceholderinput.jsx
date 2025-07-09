import React from 'react';

export default function IconPlaceholderInput({ icon, placeholder ,width = 'w-fit' }) {
  return (
    <div className={`flex items-center gap-4 border px-3 py-2 rounded-md shadow-sm ${width}`}>

      <span className=" text-base flex items-center w-4 h-4">
        {icon}
      </span>
      <input
        type="text"
        className="grow outline-none text-sm "
        placeholder={placeholder}
      />
    </div>
  );
}

