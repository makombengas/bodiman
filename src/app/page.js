

import AboutComponent from "@/components/aboutComponent/AboutComponent";
import Banner from "@/components/banner/Banner";
import BodimanComponent from "@/components/bodimanComponent/BodimanComponent";
import ContactPage from "@/components/contactPage/ContactPage";
import Donation from "@/components/donation/Donation";
import Travel from "@/components/travel/Travel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="" >
       
      <Banner />
      <BodimanComponent />
      <AboutComponent />
      <Travel />
      <Donation />
      <ContactPage />
    </div>
  );
}
