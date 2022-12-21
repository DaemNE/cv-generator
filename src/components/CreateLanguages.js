import React from 'react'
import { useState, useRef } from 'react';

function CreateLanguages({setLanguages, languages}) {

  const [language, setLanguage] = useState("");
  const [languageLevel, setLanguageLevel] = useState("");

  const ref = useRef(null);



  return (
    <React.Fragment>
        <div className='create-title'>Languages</div>
        <div className="create-skill-input">
        <input className='create-skill-input' ref={ref} type="text" placeholder='Dutch' value={language} onChange={(e) => setLanguage(e.target.value)}/>
        <input className='create-skill-input' type="text" placeholder='Native' value={languageLevel} onKeyDownCapture={(e) => {
          if (e.key === "Enter") {
            const languageItem = {
            language,
            languageLevel
          }
            setLanguageLevel("")
            setLanguage("")
            ref.current.focus()
            setLanguages(() => 
              [...languages, languageItem]
            )
          }
        }} onChange={(e) => setLanguageLevel(e.target.value)}/>
      </div>
      <div className='button-group'>
        <button className='button-add' onClick={() => {
          const languageItem = {
            language,
            languageLevel
          }
        setLanguageLevel("")
        setLanguage("")
        setLanguages(() => 
          [...languages, languageItem]
        )
        }}>Add</button>
        <button className='button-delete'onClick={() => setLanguages(() => {
          languages.pop()
          return [...languages]
          })}>Delete</button>
      </div>
    </React.Fragment>
  )
}

export default CreateLanguages