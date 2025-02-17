import { projectData } from '@/data/data';
import Image from 'next/image';
import React from 'react';

const Travel = () => {
  return (
    <div
      id='reise'
      className='w-full  px-4 scroll-mt-16 py-8 md:py-16  max-w-7xl mx-auto'>
      <div className='  '>
        <div className=' h-full  flex flex-col gap-8 md:gap-16'>
          <h1 className='uppercase  text-4xl md:text-5xl lg:text-6xl font-bold  text-green-500'>
            Reise nach Kamerun
          </h1>
          <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
            <div className='w-full md:w-1/2'>
              <div className='flex flex-col gap-4'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                  {projectData.travelSection.title}
                </h2>
                <p className='font-thin  text-md md:text-lg lg:text-xl'>
                  {projectData.travelSection.description}
                </p>
              </div>
              <div className='mt-4 flex flex-col gap-4'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                  {projectData.travelSection.itinaryTitle}
                </h2>
                <ul className='ml-6 text-green-500 list-disc font-thin  text-md md:text-lg lg:text-xl'>
                  {projectData.travelSection.itinerary.map((goal, index) => (
                    <li className='' key={index}>
                      <div className='text-white'>{goal}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <Image
                priority
                className='rounded-lg w-full h-[40vh] object-cover '
                src={projectData.images[1].url}
                alt={projectData.images[1].alt}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
