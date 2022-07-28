import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';



import {enTranslation} from '../lang/en';
i18next
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: enTranslation,
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

export default i18next;
