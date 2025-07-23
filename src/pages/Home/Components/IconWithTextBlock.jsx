import React from 'react'
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph'
import Heading from '../../../ui/Typography/Heading/Heading'

export default function IconWithTextBlock({p='',h='' ,icon}) {
  return (
    <>
    <div className='flex gap-1.5'>
        <div>
            <span>{icon}</span>
        </div>
        <div>
            {p && <Paragraph className="text-gray-500">{p}</Paragraph>}
            {h && <Heading>{h}</Heading>}
        </div>
    </div>
    </>
  )
}
