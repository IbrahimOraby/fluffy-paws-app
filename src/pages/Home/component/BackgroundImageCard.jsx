import React from 'react'
import OptionButton from '../../../ui/Buttons/OptionButton'
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph'
import Heading from '../../../ui/Typography/Heading/Heading'

export default function BackgroundImageCard({ img, buttonclass = '' ,h='',p='',imgclass=''  }) {
  return (
    // rounded-xl w-100
    <div className={`relative ${imgclass}`} >
      <img
        src={img }
        alt="Card Background"
        className={`w-full  object-cover rounded-xl ${imgclass}`}
       
      />

       
      <div className="absolute inset-0 bg-black/20 rounded-xl" />
      <div className="absolute inset-0 flex items-start justify-center mt-12">
              <div>{h && <Heading className='text-white font-bold text-5xl'>{h}</Heading>}
        {p && <Paragraph  className='text-white font-bold text-3xl text-center' >{p}</Paragraph>}
      </div>
        <OptionButton title={'test'} className={`${buttonclass}`} />
      </div>
    </div>
  )
}
