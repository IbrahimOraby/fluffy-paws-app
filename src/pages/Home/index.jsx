import React from 'react'
import Animalcard from './components/Animalcard'
import { StaticDogIcon, StaticHeartIcon } from '../../ui/Icons/StaticIcons'
import Options from './components/Options'

import Iconwithpandh from './components/IconWithTextBlock'
import Cardwithbgimg from './components/BackgroundImageCard'
import Trustedsection from './components/Trustedsection'
import Howworksection from './components/Howworksection'
import Booking from './components/Booking'
import Petstore from './components/Petstore'

import Brands from './components/Brands'
import Faqs from './components/Faqs'
import Services from './components/Services'

const Home = () => {
  return (
    <>
  {/* <Animalcard title="Small Dog" description="Under 6 months" icon={<StaticDogIcon />} className='w-50 bg-base-100 shadow-sm ' />
<Options/>
<Iconwithpandh icon={<StaticHeartIcon color='red'/>} h={'its heart icon for test'}></Iconwithpandh>
<Cardwithbgimg/> */}
<Trustedsection></Trustedsection>
<Services/>
<Howworksection />
<Booking/>
<Faqs/>
<Petstore/>
<Brands/>


</>
  )
}

export default Home;
