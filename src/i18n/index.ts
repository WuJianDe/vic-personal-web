import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "home-title": "Welcome to my website",
      // ...other keys...
    },
  },
  zh: {
    translation: {
      "home-title": "歡迎來到我的網站",
      // ...other keys...
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // 預設語言
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
