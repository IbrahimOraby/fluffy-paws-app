import React from 'react'
import Heading from '../../../ui/Typography/Heading/Heading'
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph'

export default function Animalcard({ icon ,description,title ,className=''} ) {
  return (
  <>
  <div className={`card card-side p-3 gap-5  ${className}`}>
  <figure >
   <span className='contents'>
    {icon}
   </span>
  </figure>
  <div className="card-body p-1">
   
    <Heading className="card-title ">{title}</Heading>
   
    <Paragraph className='flex '>{description}</Paragraph>
  
  </div>
</div>
  </>
  )
}
