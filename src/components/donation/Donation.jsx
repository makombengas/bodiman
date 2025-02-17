'use client';

import Link from 'next/link';
import BeforeAfterImage from '../beforeAfterImage/BeforeAfterImage';
import { navigation, projectData, spendenData } from '@/data/data';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Donation =  () => {
  const [myUrl, setMyUrl] = useState('');
   useEffect(() => {
     const fetchData = async () => {
      try {
        const response = await fetch('/api/donate');
        const data = await response.json();
        setMyUrl(data.myUrl);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
     };
     fetchData();
    
   },[])

 
  return (
    <div
      id='spenden'
      className='w-full px-4 -scroll-mt-[14rem] md:scroll-mt-16 py-8 md:py-0  max-w-7xl mx-auto'>
      <div className=' md:h-screen flex justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 '>
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
                href={myUrl}
                target='_blank'>
                {navigation.cta.text}
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
