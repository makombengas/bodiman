import { navigation, villageInfo } from '@/data/data';

const BodimanComponent = () => {
  return (
    <div
      id='bodiman'
      className='w-full px-4 scroll-mt-16 md:scroll-mt-16 py-8 md:py-16  max-w-7xl mx-auto'>
      <div className=' flex justify-center items-center'>
        <div className='h-full w-full  flex flex-col gap-4 md:gap-8'>
          <h1 className='uppercase  text-4xl md:text-5xl lg:text-6xl font-bold  text-green-500'>
            {navigation.items[1].text}
          </h1>
          <div className=' w-full flex-col md:flex-row flex md:items-center gap-4'>
            <h3 className='text-xl font-bold'>{villageInfo.location}</h3>
            <span className='font-thin text-md md:text-lg lg:text-xl'>
              {villageInfo.region}
            </span>
          </div>
          <div className='flex flex-col gap-4'>
            <p className='font-thin  text-md md:text-lg lg:text-xl'>
              {villageInfo.description}
            </p>
            <h2 className='text-2xl md:text-3xl lg:text-4xl'>
              {villageInfo.history.title}
            </h2>
            <div className='flex flex-col gap-1'>
              <p className='font-thin  text-md md:text-lg lg:text-xl'>
                {villageInfo.history.origins}
              </p>
              <p className='font-thin  text-md md:text-lg lg:text-xl'>
                {villageInfo.history.colonialPeriod}
              </p>
              <p className='font-thin  text-md md:text-lg lg:text-xl'>
                {villageInfo.history.postIndependence}
              </p>
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl'>
              {villageInfo.culture.title}
            </h2>
            <div className='flex flex-col gap-1'>
              <p className='font-thin  text-md md:text-lg lg:text-xl'>
                {villageInfo.culture.ceremonies}
              </p>
              <p className='font-thin  text-md md:text-lg lg:text-xl'>
                {villageInfo.culture.agriculture}
              </p>
              <p className='font-thin  text-md md:text-lg lg:text-xl'>
                {villageInfo.culture.oralTradition}
              </p>
            </div>

            <h2 className='text-2xl md:text-3xl lg:text-4xl'>
              {villageInfo.currentSituation.title}
            </h2>
            <div className='flex flex-col gap-1'>
              <p className='font-thin  text-md md:text-lg lg:text-xl'>
                {villageInfo.currentSituation.inhabitants}
              </p>
              <p className='font-thin  text-md md:text-lg lg:text-xl'>
                {villageInfo.currentSituation.exploitation}
              </p>
            </div>
            <h2 className='text-2xl md:text-3xl lg:text-4xl'>
              {villageInfo.challenges.title}
            </h2>
            <div className='flex flex-col gap-1'>
              <ul className='ml-6 text-green-500 list-disc font-thin  text-md md:text-lg lg:text-xl'>
                {villageInfo.challenges.challengesArray.map((challenge, index) => (
                  <li className='' key={index}>
                    <div className='text-white'>{challenge}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodimanComponent;
