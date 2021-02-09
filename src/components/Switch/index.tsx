import { useTheme } from 'next-themes'
import { useCallback, useState } from 'react'

const Switch: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  const switchTheme = useCallback(() => {
    setIsMounted(!isMounted)

    setTheme(isMounted ? 'dark' : 'light')
  }, [isMounted, setIsMounted])
  return (
    <div
      className="w-16 h-8 bg-gray-300 rounded-full flex-shrink-0 p-1 cursor-pointer"
      onClick={switchTheme}
    >
      <div
        className={`bg-white w-8 h-6 rounded-full shadow-md ${
          isMounted ? 'transform translate-x-6' : ''
        }`}
      />
    </div>
  )
}

export default Switch
