"use client"

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';


const Banner = () => {
  return (
   <AnimatePresence>
     <div id='startseite' className='w-full py-16 md:px-4 scroll-mt-16   max-w-7xl mx-auto'>
      <div className='h-screen  py-8 md:h-[calc(100vh-16rem)]  '>
        <div className='h-full relative   '>
          <motion.div initial={{ opacity: 0}} animate={{opacity: 1 }} transition={{ duration: 2, ease: 'easeInOut' }} className='relative flex h-full md:h-full  justify-end items-center  rounded-full'>
            <Image
              className='  md:shadow-2xl  skew-12 contrast-125 md:rounded-full h-[calc(100vh-0rem)]  w-full md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] object-cover '
              src='/images/bodiman.png'
              alt='logo'
              width={300}
              height={300}
              priority
            />
            <div className="absolute hidden md:block  w-full md:w-[30rem] md:h-[30rem] lg:w-[30rem] lg:h-[30rem] h-[calc(100vh-0rem)]  rounded-full  bg-gradient-to-r from-[#012d19]/100 to-[#012d19]/15">
            </div>
          </motion.div>
          <div className='px-4 w-full flex justify-center items-center md:block bg-[#012d19]/75 md:bg-transparent h-[calc(100vh-0rem)]  md:h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div className='w-full  max-w-7xl mx-auto  flex flex-col gap-3 '>
              <div className='text-5xl md:text-7xl lg:text-8xl flex justify-center items-center md:items-start flex-col gap-3 font-bold leading-tight '>
                <motion.span initial={{ x: -800, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, ease: 'easeInOut' }} className=''> RETTEN </motion.span>
                <motion.span initial={{ x: -800, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }} className=''>WIR </motion.span>
                <motion.span initial={{ y: -800, opacity: 0, rotateY: 180 }} animate={{ y: 0, opacity: 1, rotateY: 0 }} transition={{ duration: 1.5, ease: 'easeInOut' }} className='text-green-500'>BODIMAN! </motion.span>
              </div>
              <motion.span initial={{x: -800, rotateY: 0, opacity: 0 }} animate={{x: 0, rotateY: 0, opacity: 1 }} transition={{ duration: 2, ease: 'easeInOut' }} className="  md:text-xl md:text-left text-center font-thin flex flex-col gap-3  leading-tight">
              Das Dorf Bodiman, im Bezirk Nkam (Nord-Makombe), Kamerun, ist in Gefahr! 
              </motion.span>
            </div>
          </div>
        </div>

      </div>
        <div className="hidden lg:flex  py-[2rem] h-full w-full text-4xl   justify-center items-center  ">
             <Link href="#about" className="hover:p-6 hover:bg-white rounded-full hover:h-4 hover:w-4 flex justify-center items-center  hover:text-green-700 transition-colors ease-in-out duration-500 hover:border-gray-100 hover:border-2  text-gray-400  animate-bounce cursor-pointer my-50 font-thin">v</Link>
          </div>  
    </div>
   </AnimatePresence>
  );
};

export default Banner;
