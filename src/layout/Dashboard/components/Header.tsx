import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Avatar, Select, SelectItem } from "@nextui-org/react";

import OTPLogo from "@/assets/img/logo.jpeg";
import { useUserInfo } from "@/shared/store";

export const Header = () => {
  const { i18n } = useTranslation();
  const { userInfo } = useUserInfo();

  const [currentLang, setCurrentLang] = useState(
    JSON.stringify(localStorage.getItem("lang") || "az")
  );

  useEffect(() => {
    setCurrentLang(JSON.parse(localStorage.getItem("lang")!));
  }, []);

  const handleChange = (lang: string) => {
    localStorage.setItem("lang", JSON.stringify(lang));
    i18n.changeLanguage(JSON.parse(localStorage.getItem("lang")!));
    setCurrentLang(lang);
  };

  const flagGenerate = (title: string) => {
    switch (title) {
      case "az":
        return "https://flagcdn.com/az.svg";
      case "ru":
        return "https://flagcdn.com/ru.svg";
      case "en":
        return "https://flagcdn.com/gb-eng.svg";
    }
  };

  return (
    <div className="w-full fixed h-[80px] !z-50 px-5 sm:px-2 flex items-center justify-center bg-dash ">
      <div className="w-full bg-white h-14 z-30 flex items-center justify-between px-2 rounded-2xl dash-shadow">
        <p className="w-12 h-12 rounded-full overflow-hidden cursor-pointer flex items-center justify-center ml-5 font-semibold text-xl">
          <img className="w-full" src={OTPLogo} />
        </p>
        <h1 className="font-semibold text-xl text-yellow-600">
          Old Town Plaza
        </h1>
        <div className="flex items-center justify-end">
          {userInfo && (
            <h2 className="mr-2 text-sm font-semibold leading-3 ">{`${userInfo?.user?.firstname} ${userInfo?.user?.lastname}`}</h2>
          )}
          <Avatar className="bg-base text-white" size="sm" />
          <Select
            className="ml-2"
            selectedKeys={[currentLang]}
            onChange={(e) => handleChange(e.target.value)}
            classNames={{
              base: `w-28 !min-h-10`,
              mainWrapper: `w-28 !min-h-10`,
              trigger: `w-28 !min-h-10 h-10`,
              value: `font-semibold`,
            }}
          >
            {["az", "en", "ru"].map((item) => {
              return (
                <SelectItem
                  startContent={
                    <Avatar
                      alt="Argentina"
                      className="w-6 h-6"
                      src={flagGenerate(item)}
                    />
                  }
                  value={item}
                  key={item}
                >
                  {item}
                </SelectItem>
              );
            })}
          </Select>
        </div>
      </div>
    </div>
  );
};
