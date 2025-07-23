import React from 'react'
import Heading from '../../../ui/Typography/Heading/Heading'
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph'

export default function Animalcard({ icon ,description,title ,className=''} ) {
  return (
  <>
  <div className={`card card-side p-3  ${className}`}>
  <figure >
   <span className='contents'>
    {icon}
   </span>
  </figure>
  <div className="card-body ">
   
    <Heading className="card-title justify-center">{title}</Heading>
   
    <Paragraph className='flex justify-center'>{description}</Paragraph>
  
  </div>
</div>
  </>
  )
}
