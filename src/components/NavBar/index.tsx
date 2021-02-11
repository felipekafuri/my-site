import { useCallback, useState } from 'react'
import Link from 'next/link'
import Switch from '../Switch'

const NavBar: React.FC = () => {
  const [active, setActive] = useState(false)

  const handleToggle = useCallback(() => {
    setActive(!active)
  }, [active])

  return (
    <nav className="flex items-center w-screen fixed top-0 z-50 flex-wrap border-b-2 border-darkgrey dark:border-whitedarktheme bg-whitedarktheme dark:bg-darkgrey p-3">
      <h1
        className="text-2xl border-b-2 border-l-2 border-darkgrey text-darkgrey dark:text-whitedarktheme dark:border-whitedarktheme p-3 rounded hover:border-darkgrey
      dark:hover:bg-whitedarktheme dark:hover:text-darkgrey hover:bg-darkgrey hover:text-whitedarktheme cursor-default"
      >
        FRK
      </h1>
      <button
        className="inline-flex mt-5 p-3 hover:bg-primary rounded lg:hidden text-primary ml-auto outline-none"
        onClick={handleToggle}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="z-50 lg:inline-flex md:mr-5 lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <Link href="/about">
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-3 rounded items-center text-darkgrey dark:text-whitedarktheme justify-center hover:underline text-lg">
              Quem sou
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-darkgrey dark:text-whitedarktheme lg:inline-flex lg:w-auto w-full px-3 py-3 rounded items-center justify-center hover:underline text-lg">
              Contato
            </a>
          </Link>

          <Switch />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
