import SEO from '../components/SEO'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const Home: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }
  return (
    <>
      <SEO
        title="Bem-vindo, conheça mais sobre mim!"
        shouldExcludeTitleSuffix
        description="Engenheiro de Software e entusiasta das melhores técnologias!"
      />
      <h1 className="text:2xl">Dark mode with Tailwind and Next-themes</h1>
      <button onClick={switchTheme}>Change theme</button>
    </>
  )
}
export default Home
