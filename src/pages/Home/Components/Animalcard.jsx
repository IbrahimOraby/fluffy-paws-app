import React from 'react';
import Heading from '../../../ui/Typography/Heading/Heading';
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph';

export default function Animalcard({
  icon,
  description,
  title,
  value,
  name,
  checked,
  onChange,
  className = '',
}) {
  return (
    <label
   
      className={`relative card card-side p-3 gap-5 cursor-pointer transition-all duration-200 
      border-2 ${checked ? 'border-[#BE5985]' : 'border-gray-300'} 
      rounded-md shadow-none 
      focus:outline-none focus:ring-0 active:ring-0 focus-visible:outline-none ${className}`}
    >
   
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="absolute opacity-0 pointer-events-none appearance-none focus:outline-none focus:ring-0"
      />

      <figure>
        <span className="contents">{icon}</span>
      </figure>

      <div className="card-body p-1">
        <Heading as="h3" className="card-title text-[#565656]">
          {title}
        </Heading>
        <Paragraph className="flex">{description}</Paragraph>
      </div>
    </label>
  );
}
