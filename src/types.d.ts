import { languages } from "./assets/Helpers"


export type defaultLanguage = 'auto'
export type languagesType = keyof typeof languages

export type typeFromLanguage = languagesType | defaultLanguage
export type typeToLanguage = languagesType

export interface stateType{
    fromLanguage:typeFromLanguage,
    toLanguage:typeToLanguage,
    loading:boolean,
    text:string,
    result:string
}

export interface FavType{
        from:languagesType,
        to:languagesType
}


type Type = 'toLanguage' | 'fromLanguage' | 'printResult' | 'textInitial' | 'changeLanguage'

export interface actionsTyp {
    payload:string,
    type:Type
}

export type actionsType = {type:'toLanguage',payload:typeToLanguage} |  
{type:'fromLanguage',payload:typeFromLanguage} |
{type:'printResult',payload:string} | 
{type:'textInitial',payload:string} | 
{type:'changeLanguage'}  



export type themeType = 'light' | 'dark' 


