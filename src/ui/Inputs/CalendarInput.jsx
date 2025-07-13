import { Calendar1Icon } from 'lucide-react';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function CalendarInput({ placeholder }) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const formatDate = (date) => {
    return date
      ? `${String(date.getDate()).padStart(2, '0')}  ${date.toLocaleString('en-US', {
          month: 'short',
        })}`
      : '';
  };

  return (
    <div className="relative w-fit">
      <div
        className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md shadow-sm w-52
        focus-within:border-[#BE5985] focus-within:ring-2 focus-within:ring-[#BE5985] focus-within:ring-offset-2 transition-all duration-200"
      >
        <div
          onClick={toggleCalendar}
          className="w-5 h-5 cursor-pointer flex items-center justify-center"
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 
              0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 
              18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 
              21 11.25v7.5m-9-6h.008v.008H12v-.008Z" />
          </svg> */}
          <Calendar1Icon/>
        </div>

        <input
          type="text"
          readOnly
          value={formatDate(selected)}
          placeholder={placeholder}
          className="grow outline-none text-sm cursor-pointer bg-transparent"
          onClick={toggleCalendar}
        />
      </div>

      {isOpen && (
        <div className="absolute z-10 bg-white mt-2 rounded-md shadow-md border">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              setSelected(date);
              setIsOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
}

