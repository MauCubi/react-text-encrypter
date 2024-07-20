import { useState } from 'react';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next"

const Header = () => {

  const [selectedLanguage, setSelectedLanguage] = useState({language: localStorage.getItem('language')||'Español', lng:localStorage.getItem('lng')||'es'})
  const [hiddenStatus, sethiddenStatus] = useState('hidden')
  const [t, i18n] = useTranslation("global")

  const toggleDropdown = () => {
    sethiddenStatus(hiddenStatus=='hidden'?'':'hidden')
  }

  const changeLanguage = (language: string, lng: string) => {
    setSelectedLanguage({language, lng})
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
    localStorage.setItem('language', language)
    sethiddenStatus('hidden')
  }

  return (
    <header className='flex py-4 max-sm:px-2 px-8 bg-black justify-between'>

        <div className='relative flex max-sm:w-[50px] w-[150px]'>
          <div 
            onClick={() => toggleDropdown()}
            className='flex justify-between bg-white border-solid border-gray-400 self-center cursor-pointer border-[1px] 
            max-sm:h-[40px] h-fit max-sm:w-[40px] w-full 
            max-sm:px-3 px-5 py-2 rounded-full align-middle select-none'
          >
            <span className={`fi fi-${selectedLanguage.lng}`}></span>
            <p className='max-sm:hidden'>{selectedLanguage.language}</p>
            <img src='/src/assets/dropdown-arrow-svgrepo-com.svg' width={20} className='max-sm:hidden'></img>
          </div>

          <div className={`rounded-xl border-gray-300 bg-white absolute top-[46px] max-sm:w-auto w-full shadow ${hiddenStatus}`}>

            <div 
              className='language-dropdown'
              onClick={() => changeLanguage('Español', 'es')}
            >
              <span className="fi fi-es"/>
              Español
            </div>

            <div 
              className='language-dropdown'
              onClick={() => changeLanguage('English', 'gb')}
            >
              <span className="fi fi-gb"/>
              English
            </div>

          </div>
        </div>

        <h1 className='font-montserrat max-sm:text-xl self-center text-3xl text-white'>{t("header.title")}</h1>
        <div className='max-sm:w-[50px] w-[150px]'/>        
        
    </header>
  )
}

export default Header