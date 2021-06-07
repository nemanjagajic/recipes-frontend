import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// @ts-ignore
import en from './locale/en'

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      translations: en
    }
  },

  fallbackLng: 'en',
  ns: ['translations'],
  defaultNS: 'translations'
});

export default function $t(key: string, params = {}) {
  return i18n.t(key, params)
}
