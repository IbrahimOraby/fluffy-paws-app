import React from 'react';
import BackgroundImageCard from './BackgroundImageCard';
import Animalcard from './Animalcard';
import homeImg from '../../../assets/images/homeimg1.jpg';
import {
  StaticCatIcon,
  StaticDogIcon,
  StaticMapIcon,
  StaticUserIcon,
} from '../../../ui/Icons/StaticIcons';
import Heading from '../../../ui/Typography/Heading/Heading';
import { HomeIcon, SearchIcon } from 'lucide-react';
import IconPlaceholderInput from '../../../ui/Inputs/Iconplaceholderinput';
import CalendarInput from '../../../ui/Inputs/CalendarInput';
import { useNavigate } from 'react-router';

export default function Trustedsection() {
  const navigate = useNavigate()
  return (
    <>
      {/*  Small screens image only with content below */}
      <div className="block md:hidden">
        <BackgroundImageCard
          img={homeImg}
          h="Trusted pet care, anytime, anywhere"
          p="Find trusted pet sitters & dog walkers near you"
          buttonclass="hidden"
          imgclass="w-full h-[300px] sm:h-[400px] object-cover"
          
        />

        {/* Content below the image on small screens */}
        <div className="mt-6 px-4 flex flex-col lg:flex-row gap-10">
          {/* Animal Section */}
          <div className="flex-1">
            <Heading className="text-lg sm:text-xl md:text-2xl text-[#565656]">
              Who needs looking after?
            </Heading>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Animalcard
                icon={<StaticDogIcon color="#BE5985" />}
                title={'Dogs'}
                description={'Including puppys'}
                className="w-full h-fit py-1 p-1.5 sm:w-1/2 border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer"
              />
              <Animalcard
                icon={<StaticCatIcon color="#BE5985" />}
                title={'Cats'}
                description={'Including kittens'}
                className="w-full h-fit py-1  sm:w-1/2 border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer"
              />
            </div>
          </div>

          {/* Provider Section */}
          <div className="flex-1">
            <Heading className="text-lg sm:text-xl md:text-2xl text-[#565656]">
              What type of provider you search for?
            </Heading>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Animalcard
                icon={<StaticUserIcon color="#BE5985" />}
                title={'Personal Carer'}
                description={'Cheaper prices'}
                className="w-full h-fit py-1 p-1.5 sm:w-1/2 border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer"
              />
              <Animalcard
                icon={<HomeIcon color="#BE5985" />}
                title={'Organization'}
                description={'See our trusted partners'}
                className="w-full h-fit py-1 p-1.5 sm:w-1/2 border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <form className="flex flex-col md:flex-row justify-between items-stretch gap-4 mt-4">
          <div className="flex flex-col gap-3 flex-1">
            <IconPlaceholderInput
              icon={<StaticMapIcon />}
              placeholder="Add your street address"
              width="w-full"
            />
            <CalendarInput placeholder={'Choose the date'} />
          </div>

          <button
            className="flex items-center justify-center gap-2 px-5 py-3 text-sm text-white rounded-full shadow-sm hover:shadow-md transition duration-200 hover:opacity-90 w-full md:w-auto"
            style={{ backgroundColor: '#BE5985' }}
          >
            <SearchIcon className="w-4 h-4" />
            Search for a sitter
          </button>
        </form>
      </div>

      {/* md+ screens */}
      <div className="hidden md:block relative">
        <BackgroundImageCard
          img={homeImg}
          h="Trusted pet care, anytime, anywhere"
          p="Find trusted pet sitters & dog walkers near you"
          buttonclass="hidden"
          imgclass="w-full h-[600px] object-cover"
        />

        <div className="absolute top-[350px] left-1/2 transform -translate-x-1/2 bg-[#f4f4f4] rounded-xl p-6 shadow-lg w-[95%] max-w-5xl z-10">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Animal Section */}
              <div className="flex-1">
                <Heading className="text-lg sm:text-xl md:text-2xl text-[#565656]">
                  Who needs looking after?
                </Heading>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Animalcard
                    icon={<StaticDogIcon color="#BE5985" />}
                    title={'Dogs'}
                    description={'Including puppys'}
                    className="w-full h-fit py-1.5 sm:w-1/2 border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer "
                  />
                  <Animalcard
                    icon={<StaticCatIcon color="#BE5985" />}
                    title={'Cats'}
                    description={'Including kittens'}
                    className="w-full h-fit py-1.5 sm:w-1/2 border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer "
                  />
                </div>
              </div>

              {/* Provider Section */}
              <div className="flex-1">
                <Heading className="text-lg sm:text-xl md:text-2xl text-[#565656]">
                  What type of provider you search for?
                </Heading>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Animalcard
                    icon={<StaticUserIcon color="#BE5985" />}
                    title={'Personal Carer'}
                    description={'Cheaper prices'}
                    className="w-full h-fit py-1.5 sm:w-1/2 border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer p-5"
                  />
                  <Animalcard
                    icon={<HomeIcon color="#BE5985" />}
                    title={'Organization'}
                    description={'See our trusted partners'}
                    className="w-full h-fit py-1.5 sm:w-1/2 border border-gray-300 hover:border-gray-500 transition-all duration-200 rounded-md shadow-sm cursor-pointer p-0"
                  />
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex flex-row md:flex-col gap-3 flex-1">
                <IconPlaceholderInput
                  icon={<StaticMapIcon />}
                  placeholder="Add your street address"
                  width="w-full md:w-[70%]"
                />
                <CalendarInput placeholder={'Choose the date'} width="w-full md:w-full" />
              </div>

              <button
              onClick={()=>navigate('/shelters')}
                className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 text-sm text-white rounded-full shadow-sm hover:shadow-md transition duration-200 hover:opacity-90 w-full md:w-auto"
                style={{ backgroundColor: '#BE5985' }}
              >
                <SearchIcon className="w-4 h-4" />
                Search for a sitter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
