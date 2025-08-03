import React from 'react';

export const MultiFilePreview = ({ file, onRemove }) => {
  return (
    <div className="relative w-40 h-40 overflow-hidden rounded-lg shadow-md">
      <img
        src={file.cdnUrl}
        alt={file.name}
        className="w-full h-full object-cover"
      />
      <button
        onClick={onRemove}
        className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs opacity-80 hover:opacity-100 transition-opacity"
      >
        &#x2715;
      </button>
    </div>
  );
};