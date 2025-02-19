"use client"

import { projectData } from '@/data/data';
import { useInView, useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const Travel = () => {
  const scrollRef = useRef();
  const { scrollYProcess } = useScroll({ container: scrollRef });
  const travelRef = useRef(null);
  const isTravelInView = useInView(travelRef);
  return (
    <div
      id='reise'
      ref={travelRef}
      className='w-full  px-4 scroll-mt-16 py-8 md:py-16  max-w-7xl mx-auto'>
      <div 
      ref={scrollRef}
      className='  '>
        <div className=' h-full  flex flex-col gap-8 md:gap-16'>
          <motion.h1 
             initial={{  x: -150, opacity: 0}}
             animate={isTravelInView ? {  x: 0, opacity: 1 } : { }}
             transition={{ delay: 0.5, ease: 'easeInOut' }}
          className='uppercase  text-4xl md:text-5xl lg:text-6xl font-bold  text-green-500'>
            Reise nach Kamerun
          </motion.h1>
          <div className='flex flex-col md:flex-row items-center gap-4 md:gap-8'>
            <div className='w-full md:w-1/2'>
              <div className='flex flex-col gap-4'>
                <motion.h2 
                  initial={{  x: -150, opacity: 0}}
                  animate={isTravelInView ? {  x: 0, opacity: 1 } : { }}
                  transition={{ delay: 1, ease: 'easeInOut' }}
                className='text-2xl md:text-3xl lg:text-4xl'>
                  {projectData.travelSection.title}
                </motion.h2>
                <motion.p 
                  initial={{  x: -150, opacity: 0}}
                  animate={isTravelInView ? {  x: 0, opacity: 1 } : { }}
                  transition={{ delay: 1.5, ease: 'easeInOut' }}
                className='font-thin  text-md md:text-lg lg:text-xl'>
                  {projectData.travelSection.description}
                </motion.p>
              </div>
              <motion.div 
                initial={{  x: -150, opacity: 0}}
                animate={isTravelInView ? {  x: 0, opacity: 1 } : { }}
                transition={{ delay: 2, ease: 'easeInOut' }}
              className='mt-4 flex flex-col gap-4'>
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
              </motion.div>
            </div>
            <motion.div 
              initial={{  x: 150, opacity: 0}}
              animate={isTravelInView ? {  x: 0, opacity: 1 } : { }}
              transition={{ delay: 2.5, ease: 'easeInOut' }}
            className='w-full md:w-1/2'>
              <Image
                priority
                className='rounded-lg w-full h-[40vh] object-cover '
                src={projectData.images[1].url}
                alt={projectData.images[1].alt}
                width={500}
                height={500}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
