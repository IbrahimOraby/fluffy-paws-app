import React from 'react'
import IconWithTextBlock from './IconWithTextBlock'
import {  StaticPawIcon} from '../../../ui/Icons/StaticIcons'

import {  CheckIcon } from 'lucide-react'


export default function Booking() {
  return (
    <>
    <div className="flex flex-col-reverse md:flex-row items-center justify-between  px-2 md:px-20 py-16">


  <div className="flex-1 bg-gray-50 p-8 rounded-2xl  space-y-6 pl-30 pt-3">

    <IconWithTextBlock
      icon={<StaticPawIcon color='#BE5985' />}
      h="Book with peace of mind"
      hclass="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800"
      iconclass='text-center w-100'
    />

    <IconWithTextBlock
      icon={<CheckIcon className="text-[#BE5985] w-6 h-6" />}
      p="All sitters have their identity verified, and can choose to add police checks"
      pclass="text-lg text-gray-700"
    />

    <IconWithTextBlock
      icon={<CheckIcon className="text-[#BE5985] w-6 h-6" />}
      p="Every booking is covered by Accident Cover"
      pclass="text-lg text-gray-700"
    />

    <IconWithTextBlock
      icon={<CheckIcon className="text-[#BE5985] w-6 h-6" />}
      p="Access to our customer support team"
      pclass="text-lg text-gray-700"
    />
  </div>

  <div className="flex-1">
    <img
      src="https://www.madpaws.com.au/marketplace/images/ServiceLandingPages/TrustedSitters/TrustBuilding.webp"
      alt="Trust Building"
      className="w-full rounded-2xl shadow-lg"
    />
  </div>
</div>
    </>
  )
}
