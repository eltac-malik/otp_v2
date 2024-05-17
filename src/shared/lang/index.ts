import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { TR_AZ } from "./locale/az";
import { TR_RU } from "./locale/ru";

i18next.use(initReactI18next).init({
  resources: {
    az: TR_AZ,
    ru: TR_RU,
  },
  lng: "az",
  interpolation: {
    escapeValue: false,
  },
});
