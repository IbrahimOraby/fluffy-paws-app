import React from 'react'
import { StaticCalendarIcon,  StaticSearchIcon } from '../../../ui/Icons/StaticIcons'
import Heading from '../../../ui/Typography/Heading/Heading'
import { ChevronRight } from 'lucide-react'
import Options from './Options'


export default function Howworksection 
() {
  return (
    <>
    <div className="mt-96 flex justify-center">
      <div
        className="w-[90%] h-[500px] rounded-3xl bg-cover bg-center flex items-center px-10"
        style={{
          backgroundImage:
            "url('https://www.madpaws.com.au/marketplace/images/homepage/CoupleWithDogsLarge.webp')",
        }}
      >
        <div className="text-white ml-auto max-w-md w-full">
         
          <Heading className="text-4xl md:text-5xl font-bold mb-6 text-center leading-tight">
            How does <br className="hidden md:block" /> Mad Paws work?
          </Heading>

          <div className="mb-6">
            <Options icon1={<StaticSearchIcon color='black'/>} icon2={<StaticCalendarIcon color='black'/>} />
          </div>

         
          <div className="flex justify-center ">
            <button className="bg-white text-[#BE5985] p-5 rounded-full text-sm font-semibold hover:opacity-90 transition flex items-center gap-2 ">
              Check out how it works
              < ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
