import './App.css'
import 'remixicon/fonts/remixicon.css'
import { useTranslate } from './hooks/useTranslate';
import Container from './components/Container';
import ButtonFav from './components/ButtonFav';
import TextArea from './components/TextArea';
import ButtonInterchange from './components/InterchangeButton';
import Form from './components/Form';
import Select from './components/Select';
import {  languagesFavorites } from './assets/Helpers'
import Header from './layouts/Header';
import { useEffect, useRef } from 'react';
import { api, getTranstale } from './Api/axiosApi';
function App() {

 const {loading,fromLanguage,text,setfromLanguage, setToLanguage,result,setResult,setText,toLanguage, interChangeLanguage} = useTranslate()


 // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
 const inputFrom = useRef<HTMLTextAreaElement>(null!);

  useEffect(() => {
    if (text.length > 3) {
        getTranstale(text)
        .then(data => {
          setResult(data.message)
          console.log(result);
          
        })
    }

    if (!text) {
      setResult('')
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const keyupbutton = () => {
    console.log('escribiendo..');
    
  }

  // useEffect(() => {
    
  //   inputFrom.current.addEventListener('keyup',keyupbutton)
  
  //   return () => {
  //     inputFrom.current.removeEventListener('keyup',keyupbutton )
  //   }
  // }, [])
  
  

  return (
    <Container>
      <div className="w-[90%] max-w-4xl dark:bg-dark text-dark  dark:text-white rounded-2xl border border-accent dark:border-white/10">
            <Header/>
            
            <div className='body p-6'>
                
                <section className="favorites flex items-center gap-5">
                    <span className='font-semibold'>Your favorites:</span>
                    <div className='flex items-center gap-3'>
                        {
                          languagesFavorites.map( lang => <ButtonFav languages={lang} setToLanguage={setToLanguage} setfromLanguage={setfromLanguage} /> )
                        }
                    </div>
                </section>

                <section className='grid gap-4 grid-cols-2 mt-8 relative'>
                    <div className='absolute size-14 rounded-full grid place-items-center dark:bg-dark left-1/2 -translate-x-1/2 top-[20%] '>
                      <ButtonInterchange disabled={fromLanguage ===  'auto'} onClick={() => interChangeLanguage()} />
                    </div>
                    <Form >
                      <Select type='from' onChange={setfromLanguage} value={fromLanguage}  />
                      <TextArea ref={inputFrom} loading={loading} onChange={setText} value={text} autoFocus={true} type='from' />
                    </Form>
                    <Form>
                      <Select type='to' onChange={setToLanguage} value={toLanguage} />
                      <TextArea loading={loading} onChange={setResult} value={result} autoFocus={false} type='to'/>
                    </Form>
                </section>
            </div>
      </div>
    </Container>
  )
}

export default App
