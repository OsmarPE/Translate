import { FavType } from "../types"

export const languages = {
    es: 'spanish',
    en: 'english',
    fr: 'french'
}

export const languagesFavorites: FavType[] = [
    {
        from: 'en',
        to: 'fr'
    },
    {
        from: 'en',
        to: 'es'
    },
    {
        from: 'fr',
        to: 'en'
    },
]

interface sizeContentX{
    anchoX:number,
    altoX:number
}
interface sizeContentY{
    anchoY:number,
    altoY:number
}

