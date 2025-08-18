import React from 'react'

import Heading from '../../../ui/Typography/Heading/Heading'
import OptionButton from '../../../ui/Buttons/OptionButton';

export default function Brands() {
  return (
    <>
    <div className="px-4 py-12">
      <Heading className="text-2xl md:text-3xl font-semibold text-[#414141] w-full text-left mb-8" >
        Other brands in the Fluffy Paws Group
      </Heading>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col justify-center items-center bg-[#f5f8fc] p-10 gap-8 rounded-4xl  text-center">
          <div className="max-w-[180px] w-full">
            <img
              src="https://www.madpaws.com.au/marketplace/images/homepage/PetChemist.svg"
              alt="Pet Chemist Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        <a   target="_blank"
        href='https://petchemist.com.au/?utm_source=madpaws&utm_medium=futures&utm_campaign=homepage'>
          <OptionButton

            title={'Shop Pet Healthy'}
            className="rounded-3xl capitalize bg-[#14607a] border-0 text-white px-6 py-2 text-lg hover:bg-[#1c7f9f] transition-all duration-300 ease-in-out"
          />
          </a>
          <div className="max-w-[250px] w-full">
            <img
              src="https://www.madpaws.com.au/marketplace/images/homepage/petchemist.webp"
              alt="Pet Chemist Image"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center bg-[#f2ecf3] p-10 gap-8 rounded-4xl  text-center">
          <div className="max-w-[180px] w-full">
            <img
              src="https://www.madpaws.com.au/marketplace/images/homepage/Waggly.svg"
              alt="Waggly Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <a target='_blanck' 
          href='https://waggly.com.au/?utm_source=madpaws&utm_medium=futures&utm_campaign=homepage'>
          <OptionButton
            title={'Shop toys and treats'}
            className="rounded-3xl capitalize bg-[#8f4d96] border-0 text-white px-6 py-2 text-lg hover:bg-[#a65cad] transition-all duration-300 ease-in-out"
          />
          </a>
          <div className="max-w-[250px] w-full">
            <img
              src="https://www.madpaws.com.au/marketplace/images/homepage/waggly.webp"
              alt="Waggly Image"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center bg-[#f8f7f4] p-10 gap-8 rounded-4xl text-center">
          <div className="max-w-[180px] w-full">
            <img
              src="https://www.madpaws.com.au/marketplace/images/homepage/Sash.svg"
              alt="Sash Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <a
          target='_blanck'
          href='https://www.sashbeds.com/?utm_source=madpaws&utm_medium=futures&utm_campaign=homepage'>
          <OptionButton
            title={'Shop dog beds'}
            className="rounded-full capitalize bg-[#914a27] border-0 text-white px-6 py-2 text-lg hover:bg-[#a85b35] transition-all duration-300 ease-in-out"
          />
          </a>
          <div className="max-w-[250px] w-full">
            <img
              src="https://www.madpaws.com.au/marketplace/images/homepage/sash.webp"
              alt="Sash Image"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
