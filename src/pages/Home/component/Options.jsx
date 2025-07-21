import React from 'react';
import { StaticCalendarIcon, StaticSearchIcon } from '../../../ui/Icons/StaticIcons';
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph';

export default function Options({icon1 ,icon2}) {
  return (
    <div className="flex flex-col items-center">
    
      <div className="flex items-center space-x-4">
       
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            {icon1}
          </div>
        </div>

      
        <div className="w-8 h-0.5 bg-gray-400" />

      
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow">
           {icon2}
          </div>
        </div>

       
        <div className="w-8 h-0.5 bg-gray-400" />

      
        <div className="flex flex-col items-center">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Z" />
            </svg>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center space-x-8 mt-2 text-sm text-center">
        <Paragraph className="w-20">Search for a Siltter</Paragraph>
        <Paragraph className="w-20">Chat then book</Paragraph>
        <Paragraph className="w-20">Enjoy peace of mind</Paragraph>
      </div>
    </div>
  );
}
