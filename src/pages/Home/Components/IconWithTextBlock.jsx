import React from 'react'
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph'
import Heading from '../../../ui/Typography/Heading/Heading'

export default function IconWithTextBlock({p='',h='' ,pclass='', hclass='',icon ,iconclass='' ,divclass=''}) {
  return (
    <>
   <div className={`flex gap-4 ${divclass}`}>

        <div>
            <span className={iconclass}>{icon}</span>
        </div>
        <div>
            {h && <Heading className={hclass}>{h}</Heading>}
            {p && <Paragraph className={pclass}>{p}</Paragraph>}
          
        </div>
    </div>
    </>
  )
}