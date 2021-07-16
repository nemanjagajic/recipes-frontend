import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// @ts-ignore
import en from './locale/en.json'
import rs from './locale/rs.json'

i18n.use(LanguageDetector).init({
  lng: 'rs',
  resources: {
    rs: {
      translations: rs
    },
    en: {
      translations: en
    }
  },
  fallbackLng: 'rs',
  ns: ['translations'],
  defaultNS: 'translations'
});

export default function $t(key: string, params = {}) {
  return i18n.t(key, params)
}
