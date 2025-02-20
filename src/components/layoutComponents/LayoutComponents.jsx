"use client";
import { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';
import { useRouter } from 'next/navigation';

const LayoutComponents = ({children}) => {
  const [opened, setOpened] = useState(false); 

  const router = useRouter();

  useEffect(() => {
    // Vérifiez que router et router.pathname sont définis
    if (router && router.pathname && !router.pathname.startsWith('/api') && router.pathname !== '/') {
      router.replace('/');
    }
  }, [router]);
  

  return (
    <div  className={`scroll-smooth h-[100ivh] md:h-auto bg-gradient-to-r from-[#012d19] to-[#012d19]/95   text-white  `}  >
        <Navbar   />
        {children}
        <Footer opened={opened} setOpened={setOpened} />
    </div>
  )
}

export default LayoutComponents