import { FavType, typeFromLanguage, typeToLanguage } from "../types"
import { languages as lang } from '../assets/Helpers'

interface Props{
  languages: FavType,
  setfromLanguage:(language:typeFromLanguage) => void,
  setToLanguage:(language:typeToLanguage) => void,

}

function ButtonFav({languages,setToLanguage,setfromLanguage}:Props) {

  const { from, to } = languages


  function handleClick() {
      setToLanguage(to),
      setfromLanguage(from)
  }

  return (
    <button onClick={handleClick} className="block py-3 px-5 outline-none rounded-3xl border border-accent dark:border-white/10  text-sm hover:bg-slate-100/50 dark:hover:bg-white/5 cursor-pointer">
      <span className="capitalize">{lang[from]}</span> - <span className="capitalize">{lang[to]}</span> 
    </button>
  )
}

export default ButtonFav