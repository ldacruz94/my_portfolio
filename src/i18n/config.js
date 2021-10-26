import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: require('./lang/en.json')
    }
  },
  ns: ['translations'], // Namespaces
  defaultNS: 'translations' // Default Name Spaces
});

i18n.languages = ['en'];

export default i18n;