"use client"

import { navigation, projectData } from "@/data/data"
import { motion } from "framer-motion"
import Image from 'next/image'
import { useRef } from "react"

const AboutComponent = () => {
  const scrollRef = useRef(null)
  return (
    <div ref={scrollRef} id="about" className="w-full px-4 scroll-mt-16 py-8 md:py-16  max-w-7xl mx-auto">
        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ root: scrollRef }}
        className="  ">
            <div className=" h-full  flex flex-col gap-8 md:gap-16">
                <h1 className="uppercase  text-4xl md:text-5xl lg:text-6xl font-bold  text-green-500">
                  {navigation.items[2].text}
                </h1>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl">
                    {projectData.title}
                  </h2>
                  <p className="font-thin  text-md md:text-lg lg:text-xl">{projectData.description}</p>
                  <Image priority className="rounded-lg w-full h-[35vh] object-cover " src={projectData.images[0].url} alt={projectData.images[0].alt} width={500} height={500} />
                  <h2 className="text-2xl md:text-3xl lg:text-4xl">
                    {projectData.goalsSection.title}
                  </h2>
                  <p className="font-thin  text-md md:text-lg lg:text-xl">{projectData.goalsSection.description}</p>
                  <div className="flex flex-col gap-4">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl">
                    {projectData.goalsSection.goalsTitle}

                  </h2>
                  <ul className="ml-6 text-green-500 list-disc font-thin  text-md md:text-lg lg:text-xl">
                    {projectData.goalsSection.goals.map((goal, index) => (
                      <li className="" key={index}>
                        <div className="text-white">{goal}</div>
                      </li>
                    ))}
                  </ul>
                  <Image priority className="rounded-lg w-full h-[35vh] md:h-[50vh] object-cover " src={projectData.goalsSection.image.url} alt={projectData.goalsSection.image.alt} width={500} height={300} />
                 
                  </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default AboutComponent