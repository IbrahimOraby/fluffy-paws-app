import React from 'react';
import Heading from '../../../ui/Typography/Heading/Heading';
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph';

export default function Animalcard({
  icon,
  description,
  title,
  value,
  name = "animal",
  checked,
  onChange,
  className = ''
}) {
  return (
    <label
      className={`card card-side p-3 gap-5 cursor-pointer transition-all duration-200 
      border-2 ${checked ? 'border-[#BE5985]' : 'border-gray-300'} 
      shadow-none focus:shadow-none focus:outline-none focus:ring-0 
      ${className}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <figure>
        <span className="contents">{icon}</span>
      </figure>
      <div className="card-body p-1">
        <Heading className="card-title text-[#565656]">{title}</Heading>
        <Paragraph className="flex">{description}</Paragraph>
      </div>
    </label>
  );
}
