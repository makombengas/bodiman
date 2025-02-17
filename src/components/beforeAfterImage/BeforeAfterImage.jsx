'use client';

import Image from 'next/image';
import { useState } from 'react';

const BeforeAfterImage = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className='relative w-full max-w-2xl mx-auto overflow-hidden rounded-l-lg shadow-lg'>
      <div className='relative h-[50vh] md:h-[70vh]'>
        {/* Image "Après" */}
        <Image
          width={500}
          height={500}
          src={afterImage}
          alt='After'
          className='absolute  inset-0 w-full h-full object-cover'
        />
        {/* Image "Avant" */}
        <span className='absolute  z-[1] p-4 inset-0 w-full h-full'></span>

        <div
          className='absolute  inset-0 w-full h-full overflow-hidden'
          style={{ width: `${sliderPosition}%` }}>
          <Image
            width={500}
            height={500}
            src={beforeImage}
            alt='Before'
            className='w-full  h-full object-cover'
          />
          <span className='absolute bg-black/20  z-[1] p-4 inset-0 w-full h-full'>
            Vorher
          </span>
        </div>
        {/* Curseur */}
        <input
          type='range'
          min='0'
          max='100'
          value={sliderPosition}
          onChange={handleSliderChange}
          className='absolute   inset-y-0 left-0 w-full h-full opacity-0 cursor-ew-resize z-10'
        />

        <div className="absolute top-0 bottom-0  w-full bg-[#000000]/40 shadow-lg"></div>
        {/* Ligne de séparation */}
        <div
          className='absolute  top-0 bottom-0 w-1 bg-white shadow-lg'
          style={{ left: `${sliderPosition}%` }}>
          <span className='absolute   z-[1] p-4 inset-0 w-full h-full'>
            Nachher
          </span>
          <div className='absolute  -left-2 top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-md'></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterImage;
