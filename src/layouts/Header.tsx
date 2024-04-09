import { useEffect, useState } from "react"
import Moon from "../assets/Moon"
import Sun from "../assets/Sun"

type themeType = 'light' | 'dark' 

function Header() {

    const [theme, setTheme] = useState<themeType>('dark')

    const getMode = (mode:themeType, toAction:themeType) => {
        if (mode === 'dark' && toAction === 'dark') return 'bg-accent2'
        if (mode === 'light' && toAction === 'light') return 'bg-neutral-100'
        return ''
    }

    useEffect(() => {

        if (theme === 'dark') {
            document.body.classList.add(theme)
            return
        }
        
        document.body.classList.remove('dark')
    
      
    }, [theme])
     

    return (
        <header className='flex items-center justify-between h-20 px-6 border-b border-b-accent dark:border-b-white/10'>
            <h1 className='font-medium text-xl'>Google <span className='text-dark/50 dark:text-white/50 font-normal'>Translate</span></h1>
            <div className="p-1 bg-transparent flex border gap-1 border-accent dark:border-white/10 rounded-full">
                <button onClick={() => setTheme('light')} className={`size-7 grid place-items-center rounded-full ${getMode(theme,'light')}`}>
                        <Sun className="size-[60%]"/>
                </button>
                <button onClick={() => setTheme('dark')} className={`size-7 grid place-items-center rounded-full ${getMode(theme,'dark')}`}>
                        <Moon className="size-[60%]"/>
                </button>
            </div>
        </header>
    )
}

export default Header