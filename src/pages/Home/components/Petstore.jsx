import React from 'react'
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph'
import FilledButton from '../../../ui/Buttons/FilledButton'
import OptionButton from '../../../ui/Buttons/OptionButton'
import Heading from '../../../ui/Typography/Heading/Heading'

export default function Petstore() {
  return (
 <>
<div className="flex flex-col md:flex-col lg:flex-row justify-around items-center gap-13 bg-[#f4f4f4] py-10 px-4 mb-16">
  {/* RIGHT SECTION */}
  <div className="flex flex-col items-center text-center gap-4 max-w-md">
    <div className="badge badge-soft badge-secondary">New</div>
    <Heading className='text-primary-color '>Fluffy Paws   <Heading className='text-primary-color text-3xl '> Pet Store</Heading> </Heading>
   
    <Paragraph className='text-gray-600'>Fetch great savings on everything for happy, healthy pets</Paragraph>
    <OptionButton title={'Visit Our Pet Store'} className='rounded-3xl
     capitalize
       bg-primary-color
        border-0
        text-white
        hover:bg-hover-color
    '/>
  </div>

  {/* LEFT IMAGE SECTION */}
  <div className="max-w-[400px] w-full">
    <img
      src="https://www.madpaws.com.au/marketplace/images/homepage/petStore.webp"
      alt="Pet Store"
      className="w-full h-auto object-cover rounded-lg"
    />
  </div>
</div>

 </>
  )
}
