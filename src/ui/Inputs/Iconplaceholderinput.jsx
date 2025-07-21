import React from 'react';

export default function IconPlaceholderInput({ icon, placeholder, width = 'w-fit' }) {
  return (
    <div
      className={`
        mt-5
        mb-5
        flex items-center gap-4 
        border border-gray-300 
        px-3 py-2 rounded-md shadow-sm 
        ${width} 
        focus-within:border-[#BE5985] 
        focus-within:ring-2 
        focus-within:ring-[#BE5985] 
        focus-within:ring-offset-2 
        transition-all duration-200
      `}
    >
      <span className="text-base flex items-center justify-center w-5 h-5">
        {icon}
      </span>
      <input
        type="text"
        className="grow text-sm py-1 px-2 outline-none border-none bg-transparent"
        placeholder={placeholder}
      />
    </div>
  );
}


