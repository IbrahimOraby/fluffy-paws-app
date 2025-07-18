import React from 'react';

export default function IconPlaceholderInput({ icon, placeholder ,width = 'w-fit' }) {
  return (
    <div className={`flex items-center gap-4 border px-3 py-2 rounded-md shadow-sm ${width} md:w-[185px]`}>

      <span className=" text-base flex items-center w-4 h-4">
        {icon}
      </span>
      <input
        type="text"
        className="grow outline-none text-sm md:w-full "
        placeholder={placeholder}
      />
    </div>
  );
}

