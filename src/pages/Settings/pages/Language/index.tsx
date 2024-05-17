import React, { useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

export const Language = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("lang") || "az");
  }, []);

  const handleLanguage = (lng) => {
    localStorage.setItem("lang", JSON.stringify(lng));
    i18n.changeLanguage(JSON.parse(localStorage.getItem("lang")));
  };

  return (
    <div className="w-full flex items-start justify-start flex-col">
      <h1 className="w-full flex items-start justify-start mb-5 text-2xl font-semibold">
        {t("lang")}
      </h1>
      <p className="w-full flex items-center justify-start text-gray-500 text-def mb-2">
        Dili seçin
      </p>
      <Select
        className="w-96"
        onChange={(e) => handleLanguage(e.target.value)}
        classNames={{ trigger: `min-h-12 h-12 rounded-lg` }}
        listboxProps={{
          itemClasses: {
            base: `h-10`,
          },
        }}
      >
        <SelectItem key={"az"} value={"az"}>
          Azərbaycan
        </SelectItem>
        <SelectItem key={"ru"} value={"ru"}>
          Rusca
        </SelectItem>
      </Select>
    </div>
  );
};
