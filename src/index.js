import React from 'react';
import ReactDOM from 'react-dom/client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import translationEN from "./pages/Account/locales/en/translation.json";
import translationHD from "./pages/Account/locales/hindi/translation.json";
import translationMN from "./pages/Account/locales/mn/translation.json";
import translationSP from "./pages/Account/locales/sp/translation.json";
import translationPG from "./pages/Account/locales/pg/translation.json";
import translationAB from "./pages/Account/locales/ab/translation.json";
import translationID from "./pages/Account/locales/id/translation.json";
import translationGM from "./pages/Account/locales/gm/translation.json";
import translationKR from "./pages/Account/locales/kr/translation.json";

const Languages = ['en','mn','hindi','sp','ab','id','gm','pg','kr'];
const resources = {
  en: {
    translation: translationEN,
  },
  hindi: {
    translation: translationHD,
  },
  mn: {
    translation: translationMN,
  },
  pg: {
    translation: translationPG,
  },
  sp: {
    translation: translationSP,
  },
  ab: {
    translation: translationAB,
  },
  id: {
    translation: translationID,
  },
  gm: {
    translation: translationGM,
  },
  kr: {
    translation: translationKR,
  },
};
i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    whitelist: Languages,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
