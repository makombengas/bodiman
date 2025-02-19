'use client';

import { navigation, projectData } from '@/data/data';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const AboutComponent = () => {
  const scrollRef = useRef();
  const { scrollYProcess } = useScroll({ container: scrollRef });
  const aboutRef = useRef(null);
  const isAboutRefInview = useInView(aboutRef);
  return (
    <div
      ref={aboutRef}
      id='about'
      className='w-full px-4 scroll-mt-16 py-8 md:py-16  max-w-7xl mx-auto'>
      <div ref={scrollRef} className='  '>
        <div className=' h-full  flex flex-col gap-8 md:gap-16'>
          <motion.h1
            initial={{ x: -150, opacity: 0 }}
            animate={isAboutRefInview ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, ease: 'easeInOut' }}
            className='uppercase  text-4xl md:text-5xl lg:text-6xl font-bold  text-green-500'>
            {navigation.items[2].text}
          </motion.h1>

          <div className='flex flex-col gap-4'>
            <motion.h2
              initial={{ x: -150, opacity: 0 }}
              animate={isAboutRefInview ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 1, ease: 'easeInOut' }}
              className='text-2xl md:text-3xl lg:text-4xl'>
              {projectData.title}
            </motion.h2>
            <motion.p 
             initial={{  x: -150, opacity: 0}}
             animate={isAboutRefInview? {  x: 0, opacity: 1 } : { }}
             transition={{ delay: 1.5, ease: 'easeInOut' }}
            
            className='font-thin  text-md md:text-lg lg:text-xl'>
              {projectData.description}
            </motion.p>
          <motion.div 
            initial={{scaleY: 0,  x: -150, opacity: 0}}
            animate={isAboutRefInview? {scaleY: 1,  x: 0, opacity: 1 } : { }}
            transition={{ delay: 2, ease: 'easeInOut' }}
          className="">
          <Image
              priority
              className='rounded-lg w-full h-[35vh] object-cover '
              src={projectData.images[0].url}
              alt={projectData.images[0].alt}
              width={500}
              height={500}
            />
          </motion.div>
            <motion.h2 
                 initial={{  x: -150, opacity: 0}}
                 animate={isAboutRefInview? {  x: 0, opacity: 1 } : { }}
                 transition={{ delay: 2.5, ease: 'easeInOut' }}
            className='text-2xl md:text-3xl lg:text-4xl'>
              {projectData.goalsSection.title}
            </motion.h2>
            <motion.p 
                 initial={{  x: -150, opacity: 0}}
                 animate={isAboutRefInview? {  x: 0, opacity: 1 } : { }}
                 transition={{ delay: 3, ease: 'easeInOut' }}
            
            className='font-thin  text-md md:text-lg lg:text-xl'>
              {projectData.goalsSection.description}
            </motion.p>
            <motion.div 
                 initial={{  x: -150, opacity: 0}}
                 animate={isAboutRefInview? {  x: 0, opacity: 1 } : { }}
                 transition={{ delay: 3.5, ease: 'easeInOut' }}
            className='flex flex-col gap-4'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                {projectData.goalsSection.goalsTitle}
              </h2>
              <ul className='ml-6 text-green-500 list-disc font-thin  text-md md:text-lg lg:text-xl'>
                {projectData.goalsSection.goals.map((goal, index) => (
                  <li className='' key={index}>
                    <div className='text-white'>{goal}</div>
                  </li>
                ))}
              </ul>
              <Image
                priority
                className='rounded-lg w-full h-[35vh] md:h-[50vh] object-cover '
                src={projectData.goalsSection.image.url}
                alt={projectData.goalsSection.image.alt}
                width={500}
                height={300}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
