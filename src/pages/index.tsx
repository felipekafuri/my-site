import { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import SEO from '../components/SEO'
import Image from 'next/image'
import { Html } from 'next/document'

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Bem-vindo, sou Felipe, conheça mais sobre mim!"
        shouldExcludeTitleSuffix
        description="Engenheiro de Software e entusiasta das melhores técnologias!"
      />
      <header className="mb-28">
        <NavBar />
      </header>
      <main className="w-full h-screen text-center">
        <section className="min-h-screen w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 flex items-center justify-center w-full h-full ">
            <h1 className="text-4xl font-bold text-darkgrey dark:text-whitedarktheme">
              FELIPE RAMOS KAFURI
            </h1>
          </div>
          <div className="p-10 col-span-1 sm:col-span-2 md:col-span-1 w-full h-full">
            <Image
              src="/me.png"
              alt="Feipe Ramos Kafuri"
              layout="responsive"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </section>

        <section className="h-screen w-full bg-darkgrey dark:bg-whitedarktheme grid grid-cols-2 gap-4 ">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 m-auto w-full h-full">
            <h1 className="mt-5 text-4xl font-bold text-whitedarktheme dark:text-darkgrey">
              SOBRE MIM
            </h1>
          </div>
          <div className="p-10 col-span-1 sm:col-span-2 md:col-span-1  w-full h-full">
            <Image
              src="/dark_me.svg"
              alt="Feipe Ramos Kafuri"
              layout="responsive"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
