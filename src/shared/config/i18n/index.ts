import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import translationEN from "./../../../../public/locales/en/translation.json";
import translationRu from "./../../../../public/locales/ru/translation.json";

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRu
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    debug: __IS_DEV,
    interpolation: {
      escapeValue: false,
    },
    nonExplicitSupportedLngs: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });


export default i18n;