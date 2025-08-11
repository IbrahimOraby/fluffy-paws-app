import React from 'react'
import IconWithTextBlock from './IconWithTextBlock'
import Heading from '../../../ui/Typography/Heading/Heading'
import { StaticAlarmIcon, StaticBuildingIcon } from '../../../ui/Icons/StaticIcons'


const HomeIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  text-primary-color">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

)
const MoonIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary-color">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

)

const MedicalIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8 text-primary-color"
  >
 
    <rect x="7" y="2" width="10" height="3" rx="1" className="text-primary-color" />
    <rect x="5" y="5" width="14" height="17" rx="2" className="fill-pink-100" />
   <path
      d="M13 10h-2v2H9v2h2v2h2v-2h2v-2h-2v-2z"
      className="text-primary-color"
    />
  </svg>
)

export default function Services() {
  const servicesData = [
    {
      title: "Hosting",
      description: "Your pet stays at your sitter’s home. The purfect petcation with all the creature comforts.",
      icon: <HomeIcon />
    },
    {
      title: "Day Care",
      description: "Busy day, no problems! Leave your pet with your sitter for the day and return to a happy furbaby.",
      icon: <HomeIcon />
    },
    {
      title: "Overnight Stay",
      description: "Your sitter will stay overnight with your pet at your home, ensuring comfort and companionship throughout the night.",
      icon: <MoonIcon />
    },
    {
      title: "Feeding & Medication",
      description: "We make sure your pet is well-fed and gets their medications on time, exactly as instructed.",
      icon: <MedicalIcon />
    },
    {title:'Shelter Boarding',
      description:"Trusted shelter care for your pet when you're away. Affordable, safe, and monitored by professionals. Perfect for extended trips or emergencies",
      icon:<StaticBuildingIcon color='#be5985'/>
    },
    {title:'Last-Minute Booking',
      description:"Unexpected plans? No worries! Find trusted sitters available on short notice for emergencies or sudden trips.",
      icon:<StaticAlarmIcon color='#be5985'/>
    }

  ]

  return (
    <div className="px-6 py-12 md:mt-90 lg:mt-40 mb-10 ">
      <Heading className="text-4xl mb-8 text-center  text-[#414141] ">
        A service for every occasion
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {servicesData.map((service, index) => (
          <IconWithTextBlock
            key={index}
            icon={service.icon}
            h={service.title}
            p={service.description}
            pclass='text-gray-600'
            hclass='pb-2 text-[#565656]'
          />
        ))}
      </div>
    </div>
  )
}
