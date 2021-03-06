import { useCallback, useEffect, useRef, useState } from 'react'
import NavBar from '../components/NavBar'
import SEO from '../components/SEO'
import Image from 'next/image'
import Link from 'next/link'
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
      <main className="w-full min-h-screen text-center">
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
          className="min-h-screen w-full bg-darkgrey dark:bg-whitedarktheme grid grid-cols-2 gap-4 sm:rounded-tr-5xl md:rounded-r-full mt-24 "
        >
          <div className="sm:col-span-2 md:col-span-1 m-auto w-full h-ful mt-5 p-5">
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
          <div className="p-10 sm:col-span-2 md:col-span-1 w-full h-full">
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

        <section
          id="social"
          className="p-5 min-h-screen w-full bg-darkgrey dark:bg-whitedarktheme grid grid-cols-2 gap-4 sm:rounded-tl-5xl md:rounded-l-full mt-24 "
        >
          <div className="p-10 col-span-1 sm:col-span-2 md:col-span-1 w-full h-full">
            {theme === 'dark' ? (
              <Image
                src="/dark_midias.svg"
                alt="Social Midias"
                layout="responsive"
                width={400}
                height={400}
                className="rounded-full"
              />
            ) : (
              <Image
                src="/light_midias.svg"
                alt="Social Midias"
                layout="responsive"
                width={400}
                height={400}
                className="rounded-full"
              />
            )}
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1 w-full h-full mt-5 p-5">
            <section className="w-full h-1/2 flex items-center justify-evenly">
              <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-linkedIn opacity-25 rounded-2xl shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                  <div className="bg-white h-full w-full rounded-2xl shadow-2xl">
                    <Link href="https://www.linkedin.com/in/felipekafuri/">
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/linkedin.png"
                          alt="Social Midias"
                          layout="responsive"
                          width={512}
                          height={512}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-instagram opacity-25 rounded-2xl shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                  <div className="bg-white h-full w-full rounded-2xl shadow-2xl">
                    <Link href="https://www.instagram.com/codezero_official/">
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/instagram.png"
                          alt="Social Midias"
                          layout="responsive"
                          width={512}
                          height={512}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-full h-1/2 w-full flex items-center justify-evenly">
              <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-black opacity-25 rounded-2xl shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                  <div className="bg-white h-full w-full rounded-xl shadow-2xl">
                    <Link href="https://github.com/felipekafuri">
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/github.png"
                          alt="Social Midias"
                          layout="responsive"
                          width={512}
                          height={512}
                          className="rounded-xl"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="h-32 w-32 relative cursor-pointer mb-5">
                <div className="absolute inset-0 bg-red-500 opacity-25 rounded-2xl shadow-2xl"></div>
                <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                  <div className="bg-white h-full w-full rounded-xl shadow-2xl">
                    <Link href="https://www.youtube.com/channel/UC46hDx-ZY5WaHKqE2HLE5vQ?sub_confirmation=1">
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/youtube.png"
                          alt="Social Midias"
                          layout="responsive"
                          width={512}
                          height={512}
                          className="rounded-xl"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
