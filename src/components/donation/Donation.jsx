'use client';

import Link from 'next/link';
import BeforeAfterImage from '../beforeAfterImage/BeforeAfterImage';
import { navigation, projectData, spendenData } from '@/data/data';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useInView, useScroll, motion } from 'framer-motion';

const Donation =  () => {
  const [myUrl, setMyUrl] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/donate');

        // Vérifiez que la réponse est valide
        if (response.ok) {
          const data = await response.json();

          // Vérifiez que `data` et `data.myUrl` sont définis
          if (data && data.myUrl) {
            setMyUrl(data.myUrl);
          } else {
            console.error('Invalid API response:', data);
          }
        } else {
          console.error('API response error:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  const scrollRef = useRef();
  const { scrollYProcess } = useScroll({ container: scrollRef });
  const donateRef = useRef(null);
  const isDonateInView = useInView(donateRef);
 

 
  return (
    <div
      id='spenden'
      ref={donateRef}
      className='w-full px-4 -scroll-mt-[14rem] md:scroll-mt-16 py-8 md:py-0  max-w-7xl mx-auto'>
      <div 
      ref={scrollRef}
      className=' md:h-screen flex justify-center items-center'>
        <motion.div 
           initial={{ scale: 0,  y: -50, opacity: 0}}
           animate={isDonateInView ? { scale: 1,  y: 0, opacity: 1 } : { }}
           transition={{ delay: 0.5, ease: 'easeInOut' }}
        className='grid grid-cols-1 md:grid-cols-2 '>
          <div className='relative w-full h-[50vh] '>
            <div className=' absolute inset-0 w-full h-full bg-[#012d19]/50'>
              <BeforeAfterImage
                beforeImage='/images/bodiman.png' // Remplacez par le chemin de votre image "avant"
                afterImage='/images/house.png' // Remplacez par le chemin de votre image "après"
              />
            </div>
          </div>
          <div className='w-full md:h-[70vh] rounded-r-lg bg-white'>
            <div className="h-full p-4 flex flex-col justify-center items-center gap-4">
                <h1 className="text-2xl lg:text-3xl text-center font-bold  text-[#012d19]">
                    {projectData.donationSection.title.slice(0, 22)}
                </h1>
                <h2 className="text-xl md:text-2xl  text-center font-extrabold  text-green-700">
                    {projectData.donationSection.title.slice(22)}
                </h2>
                <p className="text-[#012d19]   text-center text-md lg:text-lg">
                    {projectData.donationSection.description}
                </p>

                <p className="text-[#012d19]   text-center text-sm lg:text-sm">
                    {spendenData.description}
                </p>
            <div className='flex gap-4 flex-col justify-center items-center h-full'>
              <Image
                width={75}
                height={75}
                src='/images/gofundme.png'
                alt='Bodiman'
              />
              <Link
                className='p-2 rounded-sm text-[1rem] md:text-xl  font-bold transition ease-in-out duration-500 hover:bg-green-500 bg-green-700'
                href={"https://gofund.me/66defb2b"}
                target='_blank'>
                {navigation.cta.text}
              </Link>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Donation;
