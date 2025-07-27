import { Calendar1Icon } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

export default function CalendarInput({ placeholder = "DD/MM", width, value, onChange }) {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const calendarRef = useRef(null);

  useEffect(() => {
    if (value) {
      const dateValue = typeof value === "string" ? new Date(value) : value;
      if (!isNaN(dateValue)) {
        setSelected(dateValue);
      }
    }
  }, [value]);

  const toggleCalendar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDateSelect = (date) => {
    setSelected(date);
    setIsOpen(false);
    if (onChange) onChange(date);
  };

  const formatDate = (date) => {
    return date
      ? `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}`
      : '';
  };


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative w-fit" ref={calendarRef}>
      <div
        className={`flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md shadow-sm w-[120px] md:w-[sm] ${width}
        focus-within:border-[#BE5985] focus-within:ring-2 focus-within:ring-[#BE5985] focus-within:ring-offset-2 transition-all duration-200`}
      >
        <div
          onClick={toggleCalendar}
          className="w-5 h-5 cursor-pointer flex items-center justify-center"
        >
          <Calendar1Icon />
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
            onSelect={handleDateSelect}
          />
        </div>
      )}
    </div>
  );
}
