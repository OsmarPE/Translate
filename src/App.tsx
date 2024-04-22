import "./App.css";
import "remixicon/fonts/remixicon.css";
import { useTranslate } from "./hooks/useTranslate";
import Container from "./components/Container";
import ButtonFav from "./components/ButtonFav";
import TextArea from "./components/TextArea";
import ButtonInterchange from "./components/InterchangeButton";
import Form from "./components/Form";
import Select from "./components/Select";
import { languagesFavorites } from "./assets/Helpers";
import Header from "./layouts/Header";
import { ChangeEvent, useEffect, useRef } from "react";
import { api, getTranstale } from "./Api/axiosApi";
function App() {
  const {
    loading,
    fromLanguage,
    text,
    setfromLanguage,
    setToLanguage,
    result,
    setResult,
    setText,
    toLanguage,
    interChangeLanguage,
  } = useTranslate();


  const time = useRef<number | null>(null);


  const handleChange = (text:string) => {

    setText(text)

    if (time?.current) {
      clearTimeout(time.current);
    }
    
    if (text.length < 3) {
      setResult('')
      return
    }

    time.current = setTimeout(() => {
        getTranstale(text).then((data) => {
          setResult(data.message);
        });
      
    }, 500);
  };

  const handleSpeak = () =>{
    const speak = new SpeechSynthesisUtterance(result)
    speak.lang = 'en-US'
    speechSynthesis.speak(speak);
  }

  return (
    <Container>
      <div className="w-[90%] max-w-4xl dark:bg-dark text-dark  dark:text-white rounded-2xl border border-accent dark:border-white/10">
        <Header />

        <div className="body p-6">
          <section className="grid gap-4 grid-cols-2 relative">
            {/* <div className='absolute size-14 rounded-full grid place-items-center dark:bg-dark left-1/2 -translate-x-1/2 top-[20%] '>
                      <ButtonInterchange disabled={fromLanguage ===  'auto'} onClick={() => interChangeLanguage()} />
                    </div> */}
            <Form>
              <Select
                type="from"
                onChange={setfromLanguage}
                value={fromLanguage}
              />
              <TextArea
                loading={loading}
                onChange={handleChange}
                value={text}
                autoFocus={true}
                type="from"
              />
            </Form>
            <Form>
              <Select type="to" onChange={setToLanguage} value={toLanguage} />
              <TextArea
                loading={loading}
                onChange={setResult}
                value={result}
                autoFocus={false}
                type="to"
              >
                {
                  result.length > 0 && (
                    <button className="absolute bottom-0 left-0 " onClick={handleSpeak}>
                      <i className="ri-volume-up-line text-xl"></i>
                    </button>
                  )
                }
              </TextArea>
            </Form>
          </section>
        </div>
      </div>
    </Container>
  );
}

export default App;
