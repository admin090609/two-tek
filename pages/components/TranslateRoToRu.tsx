/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Translation from "../translate.json";
import useLanguage from "../../public/LanguageContext";

interface Translations {
  translations: {
    ro: {};
    ru: {};
    en: {};
  };
}

export function getTranslatedContent(language: string) {
  const translatedContent =
    language === "ro"
      ? Translation.data.ro
      : language === "ru"
      ? Translation.data.ru
      : Translation.data.en;

  return translatedContent;
}

function TranslationRoToRu() {
  const { language, setLanguage } = useLanguage();
  const [content, setContent] = useState(Translation.data.ro);
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const handleLanguageChange = (newLanguage: React.SetStateAction<string>) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    console.log("Language changed:", language);
    setContent(
      language === "ro"
        ? Translation.data.ro
        : language === "ru"
        ? Translation.data.ru
        : Translation.data.en
    );
    setSelectedOption("");
  }, [language]);

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed. Content:", content);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [content, router.events]);

  useEffect(() => {
    console.log("Selected Option:", selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    console.log("Language changed:", language);
  }, [language]);

  return (
    <div className="relative flex items-center mt-1">
      <label className="language-switcher">
        <input
          className="toggler"
          type="checkbox"
          checked={language === "ru"} // Assuming language is a state variable
          onChange={() => {
            if (language === "ro") {
              handleLanguageChange("ru");
            } else {
              handleLanguageChange("ro");
            }
          }}
        />
        <span className="slider round"></span>
        <span className="select-fr font-semibold">RO</span>
        <span className="select-en font-semibold">RU</span>
      </label>
    </div>
  );
}

export default TranslationRoToRu;
