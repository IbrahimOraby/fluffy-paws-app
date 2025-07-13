
import React from 'react'
import BackgroundImageCard from './BackgroundImageCard'
import Animalcard from './Animalcard'
import homeImg from '../../../assets/images/homeimg1.jpg'

import {  StaticCatIcon, StaticDogIcon, StaticMapIcon,  StaticUserIcon } from '../../../ui/Icons/StaticIcons'
import Heading from '../../../ui/Typography/Heading/Heading'
import {  HomeIcon, SearchIcon } from 'lucide-react'
import IconPlaceholderInput from '../../../ui/Inputs/Iconplaceholderinput'
import CalendarInput from '../../../ui/Inputs/CalendarInput'

export default function Trustedsection
() {
  return (
  <>
   <div>
          <div className="relative">
            <BackgroundImageCard
              img={homeImg}
              h="Trusted pet care, anytime, anywhere"
              p="Find trusted pet sitters & dog walkers near you"
              buttonclass="hidden"
              imgclass="w-full h-[500px] "
            />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-70 bg-[#f4f4f4] rounded-xl p-8 shadow-lg w-[90%] max-w-5xl">
              <div className='p-4'>
                <div className='flex gap-8 flex-wrap'>
                  <div>
                    <Heading>Who needs looking after?</Heading>
                    <div className='flex gap-6 mt-6'>
                      <Animalcard icon={<StaticDogIcon color='#BE5985' />}
                        title={'Dogs'}
                        description={'Including puppys'}
                        className='border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer' />
                      <Animalcard
                        icon={<StaticCatIcon color='#BE5985' />}
                        title={'Cats'}
                        description={'Including kittens'}
                        className='border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer' />
                    </div>
                  </div>
  
                  <div>
                    <Heading>What type of provider you search for?</Heading>
                    <div className='flex gap-8 mt-6'>
                      <Animalcard
                        icon={<StaticUserIcon color='#BE5985' />}
                        title={'Personal Carer'}
                        description={'Cheaper prices'}
                        className='border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer' />
                      <Animalcard
                        icon={<HomeIcon color='#BE5985' />}
                        title={'Organization'}
                        description={'See our trusted partners'}
                        className='border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer' />
                    </div>
                  </div>
                </div>
  
                <div className='flex justify-between items-center gap-4 mt-8 flex-wrap'>
                  <div className='flex flex-col gap-3'>
                    <IconPlaceholderInput icon={
                     <StaticMapIcon/>
                    } placeholder="Add your street address " width='w-180' />
                    <CalendarInput placeholder={'Choose the date'} />
                  </div>
  
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm text-white rounded-full shadow-sm hover:shadow-md transition duration-200 hover:opacity-90"
                    style={{ backgroundColor: '#BE5985' }}
                  >
                    <SearchIcon className="w-4 h-4" />
                    Search for a sitter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>
  )
}
