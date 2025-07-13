import React from 'react'
import OptionButton from '../../../ui/Buttons/OptionButton'

export default function BackgroundImageCard({ img, buttonclass = '' }) {
  return (
    <div className="relative rounded-xl w-100">
      <img
        src={img }
        alt="Card Background"
        className="w-full h-64 object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-black/20 rounded-xl" />
      <div className="absolute inset-0 flex items-start justify-center pt-3">
        <OptionButton title={'test'} className={`${buttonclass}`} />
      </div>
    </div>
  )
}
