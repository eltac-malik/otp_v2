import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { TR_AZ } from "../locales/az";
import { TR_EN } from "../locales/en";
import { TR_RU } from "../locales/ru";

i18next.use(initReactI18next).init({
  supportedLngs: ["az", "en", "ru"],
  resources: {
    az: TR_AZ,
    en: TR_EN,
    ru: TR_RU,
  },
  lng: localStorage.getItem("lang") || "az",
  interpolation: {
    escapeValue: false,
  },
});
