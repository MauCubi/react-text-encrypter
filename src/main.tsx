import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'

import global_es from '../src/translations/es/global.json'
import global_en from '../src/translations/en/global.json'

i18next.init({
  interpolation: { escapeValue: false},
  lng: localStorage.getItem('lng') || 'es' ,
  resources: {
    es: {
      global: global_es
    },
    gb: {
      global: global_en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
