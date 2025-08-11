import React from 'react'
import { StaticCalendarIcon, StaticSearchIcon } from '../../../ui/Icons/StaticIcons'
import Heading from '../../../ui/Typography/Heading/Heading'
import { ChevronRight } from 'lucide-react'
import Options from './Options'
import howimg from "../../../assets/images/imgforhowsection.png"

export default function Howworksection() {
  return (
    <div className=" px-4 flex flex-col items-center justify-center gap-6 ">
      {/* Heading for small screens */}
      <Heading className="text-3xl font-bold text-black text-center mb-4 md:hidden">
        How does <br /> Mad Paws work?
      </Heading>

      {/* Image for small screens */}
      <div className="block md:hidden w-full max-w-xl rounded-3xl overflow-hidden ">
        <img
          src={howimg}
          alt="Mad Paws"
          className="w-full h-50 object-cover"
        />
      </div>

      {/* Options and button for small screens */}
      <div className="block md:hidden w-full max-w-md mx-auto mt-4">
        <Options icon1={<StaticSearchIcon color="black" />} icon2={<StaticCalendarIcon color="black" />} />
        <div className="flex justify-center mt-4">
         <a href='https://www.youtube.com/watch?v=2fK06ev1hxM'
         target='_blank'>
          <button className="bg-[#BE5985] text-white p-4 rounded-full text-sm font-semibold hover:opacity-90 transition flex items-center gap-2">
            Check out how it works
            <ChevronRight className="w-4 h-4" />
          </button>
          </a>
        </div>
      </div>

      {/* Background image with text on it for md and above */}
      <div
        className="hidden md:flex w-[90%] h-[500px] rounded-3xl bg-cover bg-center items-center"
        style={{
          backgroundImage:`url(${howimg})`
          
        }}
      >
        <div className="text-white ml-auto max-w-md w-full ">
          <Heading className="text-4xl md:text-5xl font-bold mb-6 text-center leading-tight">
            How does <br className="hidden md:block" /> Fluffy Paws work?
          </Heading>

          <div className="mb-6 ">
            <Options icon1={<StaticSearchIcon color="black" />} icon2={<StaticCalendarIcon color="black" />} />
          </div>

          <div className="flex justify-center ">
            <a target='_blank'
            href='https://youtu.be/2fK06ev1hxM?si=1Q2aLSTQCNnfNlHr'>
            <button className="bg-white text-[#BE5985] p-5 rounded-full text-sm font-semibold hover:opacity-90 transition flex items-center gap-2">
              Check out how it works
              <ChevronRight className="w-4 h-4" />
            </button>
             </a>
          </div>
        </div>
      </div>
    </div>
  )
}

