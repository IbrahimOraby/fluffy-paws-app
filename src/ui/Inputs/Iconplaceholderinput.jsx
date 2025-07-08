import React from 'react';

export default function IconPlaceholderInput({ icon, placeholder }) {
  return (
    <div>
      <label className="input flex items-center gap-2">
        <span className="h-[1em] opacity-50">
          {icon}
        </span>
        <input type="text" className="grow" placeholder={placeholder} />
      </label>
    </div>
  );
}

