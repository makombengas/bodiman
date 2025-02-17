'use client';
import { footerSimple } from '@/data/data';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Footer = ({ opened, setOpened }) => {
  const handleOpened = (id) => {
   
    setOpened(id);
  };

  return (
    <div className='relative h-16  z-[2]  bg-[#000000]/30  text-white'>
      <div className='w-full px-4 h-full   max-w-7xl mx-auto'>
        <div className='  flex h-full gap-2 justify-between items-center '>
          <p className='text-[.5rem]  md:text-sm'>{footerSimple.copyright}</p>
          <div className='flex items-center gap-4'>
            <p
              className='text-[.5rem]  md:text-sm uppercase cursor-pointer '
              onClick={() => handleOpened(footerSimple.impressum)}>
              {footerSimple.impressum.name}
            </p>
            <p
              className='text-[.5rem]  md:text-sm uppercase cursor-pointer'
              onClick={() => handleOpened(footerSimple.privacyPolicy)}>
              {footerSimple.privacyPolicy.name}
            </p>
          </div>
        </div>
      </div>
      {opened && (
        <AnimatePresence>
          <motion.div  initial={{bottom: 40, opacity: 0 }} animate={{bottom: 65, opacity: 1 }} transition={{ duration: 0.5 }} className='pb-12 rounded-t-2xl  absolute left-1/2 -translate-x-1/2  bottom-16 px-4   max-w-7xl mx-auto  w-full  h-[50vh] bg-[#151618]'>
            <div className='w-full h-10   flex justify-between '>
            {
              opened.name && (
                <h3 className='pl-4 mt-1 md:mt-4   text-2xl uppercase font-bold mb-4 text-green-500'>
                    {opened.name}
                  </h3>
              )
            }
              
              <span
                className='transition duration-300 ease-in-out ring-white  flex justify-center items-center mt-1 hover:text-2xl hover:ring-[1px] w-4 h-4 p-4 hover:rounded-full float-right cursor-pointer  text-white text-center text-3xl'
                onClick={() => setOpened(false)}>
                x
              </span>
            </div>
            <div className='h-full z-[1] w-full px-4 overflow-y-auto'>
              {opened.name && (
                <div className='py-4  flex flex-col h-full  text-white'>
                 
                  <span className="text-sm md:text-md font-thin ">
                    {opened.data.description}
                  </span>
                  <h3 className="text-sm md:text-md  font-bold mt-4 text-white">
                    {opened.data.descriptionTitle}
                  </h3>
                  <div className="mt-4 flex-col flex  gap-2">
                    <span className="text-sm md:text-md">
                      {opened.data.responsible.name}
                    </span>
                    <span className="text-sm md:text-md">
                      {opened.data.responsible.address}
                    </span>
                    <span className="text-sm md:text-md">
                      {opened.data.responsible.email}
                    </span>
                    <span className="text-sm md:text-md">
                      {opened.data.responsible.phone}
                    </span>
                  </div>
                  <span className="text-sm md:text-md mt-2">
                    {opened.data.cookies}
                  </span>
                  <span className="text-sm md:text-md font-thin">
                    {opened.data.liability.content}
                  </span>
                  <span className="text-sm md:text-md font-thin">
                    {opened.data.liability.links}
                  </span>
                  <div className="h-full">
                    <h3 className="text-sm md:text-md font-bold mt-4 text-white">
                      {opened.data.rights.title}
                    </h3>
                    <span className="text-sm md:text-md font-thin">
                    {opened.data.rights.description}
                    </span>
                    <span className="text-sm md:text-md font-thin">
                    {opened.data.rights.contact}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Footer;
