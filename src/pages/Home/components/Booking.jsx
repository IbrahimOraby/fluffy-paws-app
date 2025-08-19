import React from 'react'
import IconWithTextBlock from './IconWithTextBlock'
import { StaticPawIcon } from '../../../ui/Icons/StaticIcons'
import { CheckIcon } from 'lucide-react'

export default function Booking() {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between px-4 sm:px-6 md:px-20 py-10 md:py-16 gap-6">
 
  <div className="w-full lg:w-1/2 flex justify-center">
    <img
      src="https://www.madpaws.com.au/marketplace/images/ServiceLandingPages/TrustedSitters/TrustBuilding.webp"
      alt="Trust Building"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-90  rounded-2xl shadow-lg object-cover"
    />
  </div>
  <div className="w-full lg:w-1/2 bg-gray-50 px-4 sm:px-6 md:px-8 py-6 md:py-10 rounded-2xl space-y-5 md:space-y-6">
    <IconWithTextBlock
      icon={<StaticPawIcon color="#BE5985" />}
      h="Book with peace of mind"
      hclass="text-2xl sm:text-3xl md:text-4xl font-bold text-[#565656]"
      iconclass="text-center w-full"
      divclass="items-center"
    />

    <IconWithTextBlock
      icon={<CheckIcon className="text-[#BE5985] w-5 h-5 sm:w-6 sm:h-6" />}
      p="All sitters have their identity verified, and can choose to add police checks"
      pclass="text-base sm:text-lg text-gray-700"
      divclass="items-center"
    />

    <IconWithTextBlock
      icon={<CheckIcon className="text-[#BE5985] w-5 h-5 sm:w-6 sm:h-6" />}
      p="Every booking is covered by Accident Cover"
      pclass="text-base sm:text-lg text-gray-700"
      divclass="items-center"
    />

    <IconWithTextBlock
      icon={<CheckIcon className="text-[#BE5985] w-5 h-5 sm:w-6 sm:h-6" />}
      p="Access to our customer support team"
      pclass="text-base sm:text-lg text-gray-700"
      divclass="items-center"
    />
  </div>
</div>

  )
}
