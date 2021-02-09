import { useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import SEO from '../components/SEO'
import Image from 'next/image'

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
        <section className="h-full w-full grid grid-cols-2 gap-4">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 m-auto">
            <h1 className="text-4xl font-bold">FELIPE RAMOS KAFURI</h1>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1 m-auto">
            <Image
              src="/me.svg"
              alt="Feipe Ramos Kafuri"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
