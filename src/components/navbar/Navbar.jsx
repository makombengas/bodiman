'use client';

import { navigation } from '@/data/data';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const sprache = 'Scan mich ';
  const changeMode = 'change Mode';
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('startseite');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["startseite", "bodiman",  "about", "reise", "kontakt"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='fixed w-full  bg-[#012d19] md:sticky top-0 z-40 '>
      <div className='max-w-7xl   mx-auto py-1 px-4 flex justify-between items-center'>
        <Link href='#startseite' className='z-50' onClick={() => setOpen(false)}>
          <Image
            style={{ objectFit: 'contain', width: '4rem', height: '4rem' }}
            src={navigation.logo}
            className='  '
            alt='logo'
            width={75}
            height={75}
            priority
          />
        </Link>
        <div className=' justify-end items-center text-xl md:text-xs lg:text-sm flex gap-4 uppercase '>
          <ul
            className={`${
              open
                ? 'transition-absolute ease-in-out duration-500   w-screen md:w-auto h-screen md:h-auto  absolute top-16 right-0 justify-start pt-32 md:pt-0 md:justify-end md:items-center  items-center left-1/2 transform -translate-x-1/2 md:static md:translate-x-0 bg-[#012d19]  md:flex-row  flex flex-col'
                : 'transition-absolute ease-in-out duration-500  w-screen md:w-auto h-screen md:h-auto  absolute top-16 right-0 justify-start pt-32 md:pt-0 md:justify-end md:items-center  items-center -left-[100%] transform -translate-x-1/2 md:static md:translate-x-0  md:flex-row  flex flex-col'
            }  uppercase  flex gap-4`}>
            {navigation.items.map((item, index) => (
              <li
                onClick={() => setOpen(false)}
                key={index}
                className={`${
                  activeSection === item.id
                    ? 'border-b-2 border-green-500'
                    : ''
                }   hover:text-green-200`}>
                <Link href={`#${item.id}`}>{item.text}</Link>
              </li>
            ))}
          </ul>
          <Link
            className='px-2 py-0 md:p-2 rounded-sm text-[1rem] md:text-sm  font-bold transition ease-in-out duration-500 hover:bg-green-500 bg-green-700'
            href={`#${navigation.cta.donateLink}`}
           
            >
            {navigation.cta.donateText}
          </Link>
        </div>
        <div className='md:hidden relative ' onClick={() => setOpen(!open)}>
          <hr
            className={`w-6 h-[.15rem] rounded-full my-1 bg-white border-none ${
              open
                ? 'rotate-45 transition-rotate ease-initial duration-500 '
                : 'transition-rotate ease-initial duration-500 '
            }`}
          />
          <hr
            className={`w-6 h-[.15rem] rounded-full my-[.35rem] bg-white border-none ${
              open
                ? 'opacity-0 transition-opacity ease-initial duration-500 '
                : 'transition-opacity ease-initial duration-500'
            }`}
          />
          <hr
            className={`w-6 h-[.15rem] rounded-full my-1 bg-white border-none ${
              open
                ? 'transition-rotate ease-initial duration-500  absolute top-0  w-6 -rotate-45 rounded-full my-1 bg-white '
                : 'transition-rotate ease-initial duration-500'
            }`}
          />
        </div>
      </div>
      <div className='hidden md:flex -z-50  fixed top-50 right-0 '>
        <div className='w-[3rem] group  h-[10rem] cursor-default bg-black text-white -z-10'>
          <div className='relative   h-full uppercase text-xs font-bold rotate-90 whitespace-nowrap gap-2  flex justify-center items-center'>
            {sprache.split('').map((item, index) => (
              <span className='-rotate-90 transform ' key={index}>
                {item}
              </span>
            ))}
            <div className='hidden group-hover:block   absolute -z-30  w-[10rem] h-[10rem] top-[115%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                
               <div className="flex justify-center items-center h-full text-md  md:text-lg text-black w-full -rotate-90">
              <Image src="/images/qrCode.png" alt="qrCode" width={500} height={500} />
               </div>
            
            </div>
          </div>
        </div>
        <div className=' hidden w-[3rem] h-[12.5rem] bg-green-700 z-10'>
          <div className='h-full uppercase text-xs font-bold rotate-90 whitespace-nowrap gap-2  flex justify-center items-center'>
            {changeMode.split('').map((item, index) => (
              <span className='-rotate-90 transform ' key={index}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
