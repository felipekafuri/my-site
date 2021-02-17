import { useCallback, useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import SEO from '../components/SEO'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()

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
        <section className="min-h-screen w-full grid grid-cols-2 gap-4 ">
          <div className="col-span-1 sm:col-span-2 md:col-span-1 flex items-center justify-center w-full h-full ">
            <h1 className="text-4xl font-bold text-darkgrey dark:text-whitedarktheme font-code">
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
        <section
          id="about"
          className="h-screen w-full bg-darkgrey dark:bg-whitedarktheme grid grid-cols-2 gap-4 sm:rounded-tr-5xl md:rounded-r-full mt-24 "
        >
          <div className="col-span-1 sm:col-span-2 md:col-span-1 m-auto w-full h-ful mt-5 p-5">
            <h1 className="mt-5 text-4xl font-bold text-whitedarktheme dark:text-darkgrey font-code mb-10">
              SOBRE MIM
            </h1>
            <p className="font-code text-sm text-justify mb-5 text-whitedarktheme dark:text-darkgrey">
              Olá com ja devem ter reparado me chamo Felipe Ramos Kafuri, sou
              nascido em Goiânia-GO no ano de 2000, cidadão europeu com
              nacionalidade portuguesa, engenheiro de software e muito mais.
            </p>
            <p className="font-code text-sm text-justify mb-5 text-whitedarktheme dark:text-darkgrey">
              Meu interesse por tecnologia começou desde mais novo quando eu
              mexia no computador que havia em minha casa para instalar e
              desinstalar jogos, mexendo em seus arquivos e códigos para ver o
              que acontecia, obviamente que em sua maioria eu mais quebrava os
              códigos do que fazia algo realmente relevante, mas tudo começou
              graças a essa pequena curiosidade de entender como as coisas
              funcionam.
            </p>
            <p className="font-code text-sm text-justify mb-5 text-whitedarktheme dark:text-darkgrey">
              Desde sigo fascinado por tecnologia e ainda por jogos (emoji),
              hoje estou cursando Engenharia de Software pela UFG (Universidade
              Federal de Goiás), além de empreender em minha própria empresa da
              qual tenho sociedade com meu pai e irmão.
            </p>
          </div>
          <div className="p-10 col-span-1 sm:col-span-2 md:col-span-1  w-full h-full">
            {theme === 'dark' ? (
              <Image
                src="/dark_me.svg"
                alt="Feipe Ramos Kafuri"
                layout="responsive"
                width={400}
                height={400}
                className="rounded-full"
              />
            ) : (
              <Image
                src="/light_me.svg"
                alt="Feipe Ramos Kafuri"
                layout="responsive"
                width={400}
                height={400}
                className="rounded-full"
              />
            )}
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
