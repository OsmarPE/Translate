import { useReducer } from "react"
import { actionsType, stateType, typeFromLanguage, typeToLanguage } from "../types"




const stateInitial:stateType = {
  fromLanguage:'auto',
  toLanguage:'en',
  loading:false,
  text:'',
  result:''
}



function reducer(state:stateType,actions:actionsType):stateType {
 
    const { type } = actions
  
    switch (type) {
      case 'fromLanguage':
        return {
          ...state,
          fromLanguage: actions.payload,
          loading:true
        }
      case 'toLanguage': 
        return {
          ...state,
          loading:true,
          toLanguage:actions.payload
        }
      case 'changeLanguage':
        
        if (state.fromLanguage === 'auto') {
          return state
        }
  
        return {
          ...state,
          fromLanguage: state.toLanguage,
          toLanguage: state.fromLanguage
        }
      case 'textInitial':
    
        return {
          ...state,
          text:actions.payload,
          loading:true
        }
      case 'printResult':
        

        return {
          ...state,
          result:actions.payload,
          loading:false
        }
      default:
        return state
    }
    
}





export function useTranslate() {

  const [state,dispatch] = useReducer(reducer,stateInitial) 

  const setfromLanguage = (payload:typeFromLanguage) => {
    dispatch({type:'fromLanguage', payload})
  }
  const setToLanguage = (payload:typeToLanguage) => {
    dispatch({type:'toLanguage', payload})
  }
  const interChangeLanguage = () => {
    console.log('aaqui');
    dispatch({type:'changeLanguage'})
    
  }
  const setText = (payload:string) => {
    dispatch({type:'textInitial',payload})
  }
  const setResult = (payload:string) => {
    dispatch({type:'printResult',payload})
  }

  return{
    ...state,
    setfromLanguage,
    setToLanguage,
    interChangeLanguage,
    setResult,
    setText
  } 
}

