'use client';

import { projectData } from '@/data/data';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const ContactPage = () => {
  const [faq, setFaq] = useState({});
  const [openFaq, setOpenFaq] = useState(false);
  const handleFaq = (id) => {
    const findFagId = projectData.contact.faq.find((faq) => faq.id === id);
    setFaq(findFagId);
    setOpenFaq(true);
  };
  return (
    <div
      id='kontakt'
      className='w-full px-4   scroll-mt-24 md:-scroll-mt-16   max-w-7xl mx-auto'>
      <div className=' h-full md:h-screen flex flex-col justify-center items-center gap-4'>
        <div className='w-full h-full   rounded-md    '>
          <div className='w-full h-full flex flex-col gap-4 justify-center items-center '>
            <h1 className='uppercase  text-4xl md:text-5xl lg:text-6xl font-bold  text-green-500'>
              Kontakt{' '}
            </h1>
            <h2 className='text-2xl md:text-3xl lg:text-4xl'>
              {projectData.contact.title}
            </h2>
            <div className='  w-full flex gap-4 justify-center items-center flex-col '>
              <div className='text-lg justify-center flex-wrap flex items-center gap-2'>
                <b>{projectData.contact.address}</b>
                <p
                  href={projectData.contact.addressLink}
                  className='text-center font-thin'>
                  {projectData.contact.addressLink}{' '}
                </p>
              </div>
              <div className='text-lg flex-col md:flex-row justify-center flex-wrap  flex items-center gap-2'>
                <b>{projectData.contact.email}</b>
                <Link
                  href={projectData.contact.emailLink}
                  className='font-thin'>
                  {projectData.contact.emailLink.slice(7)}{' '}
                </Link>
              </div>
            </div>
            <div className=' py-4   flex justify-center items-center flex-col gap-4'>
              <h2 className='text-2xl md:text-3xl lg:text-4xl'>
                {projectData.contact.faqTitle}
              </h2>
              <div className='w-full relative grid grid-cols-1  md:grid-cols-2 md:gap-y-2 md:gap-x-16'>
                {projectData.contact.faq.map((item, index) => (
                  <div
                    key={index}
                    className=' mt-4 flex flex-col md:gap-2 '
                    onClick={() => handleFaq(item.id)}>
                    <ul className='text-green-500 list-none font-thin px-4  text-md md:text-lg lg:text-xl'>
                      <li className={`${faq.id === item.id ? 'border-b-2 bg-[#012d19] border-gray-300 rounded-none ' : ''}  hover:bg-[#012d19] rounded-md p-4`} >
                        <div className='  text-white text-center md:text-left cursor-pointer'>
                      {index +1} - {item.question}
                        </div>
                      </li>
                    </ul>
                    {openFaq && (
                      <div className=' md:my-32 md:mt-24 md:absolute md:w-full top-[90%] left-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 p-4 rounded-md'>
                        {faq.id === item.id && (
                          <AnimatePresence>
                            <motion.div initial={{rotateY: -45, opacity: 0 }} animate={{rotateY: 0, opacity: 1 }} transition={{ duration: 1, ease: 'easeInOut' }} className='bg-black/70 p-4 rounded-md'>
                            <p className='font-thin'>✅ {faq.answer}</p>
                          </motion.div>
                          </AnimatePresence>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
