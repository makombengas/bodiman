import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="w-full h-full">
        <div className="px-4 flex-col gap-4 h-[calc(100vh-4rem)] md:h-[calc(100vh-8rem)] bg-white flex justify-center items-center">
            <h1 className="text-7xl md:text-[8rem] text-center font-bold text-red-600">404 </h1>
            <h3 className=" text-4xl md:text-7xl text-center font-light  text-green-800">Seite nicht gefunden!</h3>
            <p className="max-w-5xl mx-auto text-lg md:text-3xl text-center font-light  text-gray-600">
            Die angeforderte Seite konnte nicht gefunden werden. Möglicherweise wurde sie verschoben oder existiert nicht mehr.
            </p>
            <Link href="/" className="transition duration-300  text-lg md:text-xl text-center font-light rounded-md hover:bg-green-900  bg-green-600 text-white px-4 py-2">Zurück zur Startseite</Link>
        </div>
    </div>
  )
}

export default NotFound