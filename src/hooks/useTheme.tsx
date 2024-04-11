import { useEffect, useState } from "react"
import { themeType } from "../types"


function useTheme() {

    const [theme, setTheme] = useState<themeType>('dark')

    useEffect(() => {

        if (theme === 'dark') {
            document.body.classList.add(theme)
            return
        }
        
        document.body.classList.remove('dark')
    
      
    }, [theme])

    const changeTheme = (theme: themeType):void =>{
        setTheme(theme)
    }


  return {
    theme,
    changeTheme
  }
}

export default useTheme