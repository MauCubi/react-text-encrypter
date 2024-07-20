import { useState } from 'react';
import { useTranslation } from 'react-i18next';


const Main = () => {

  const [originalText, setOriginalText] = useState<string>('')
  const [modifiedText, setModifiedText] = useState<string>('')
  const [t] = useTranslation("global")

  const encryptText = () => {
    setModifiedText(
      originalText
        .replace(/e/gi,'enter')
        .replace(/i/gi,'imes')
        .replace(/a/gi,'ai')
        .replace(/o/gi,'ober')
        .replace(/u/gi,'ufat')
    )
  }

  const desencryptText = () => {
    setModifiedText(
      originalText
        .replace(/enter/gi,'e')
        .replace(/imes/gi,'i')
        .replace(/ai/gi,'a')
        .replace(/ober/gi,'o')
        .replace(/ufat/gi,'u')
    )
  }

  const clearText = () => {
    setOriginalText('')
    setModifiedText('')
  }

  return (
    <div className='flex flex-row max-sm:flex-col max-sm:gap-5 p-12 justify-around'>

        <textarea className="textarea-default" placeholder={t("main.placeholder")}
          value={originalText}
          onChange={ e => setOriginalText(e.target.value) }          
        />

        <div className='flex flex-col max-sm:flex-row align-middle justify-center max-sm:justify-between sm:gap-8'>
            <button className='button-default' onClick={ encryptText }>{t("main.encrypt")}</button>
            <button className='button-default' onClick={ desencryptText }>{t("main.decrypt")}</button>
            <button className='button-default' onClick={ clearText }>{t("main.clean")}</button>
        </div>

        <textarea readOnly className="textarea-default" value={modifiedText}/>
    </div>
  )
}

export default Main