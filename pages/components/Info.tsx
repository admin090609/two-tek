import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

function Info() {
  const [showComponent, setShowComponent] = useState(false);
  const [theme, setTheme] = useState("");

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  useEffect(() => {
    // Setăm `showComponent` la `true` după o întârziere scurtă pentru a declanșa animația
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 500);
  }, []);

  useEffect(() => {
    // You can perform the DOM manipulation after the component is mounted.
    const bodyTheme = document
      .querySelector("body")
      ?.getAttribute("data-theme");
    if (bodyTheme) {
      setTheme(bodyTheme);
    }
  }, []);

  return (
    <div
      className={`lg:mt-22 mt-10 lg:mt-20 text-center relative px-4 md:px-8 lg:px-0 ${
        showComponent ? "text-focus-in" : "opacity-0 translate-y-[-50px]"
      }`}
    >
      <div className="lg:w-[70vw] mx-2 sm:mx-auto relative">
        <div className=" overflow-hidden h-[500px]  sm:w-[100%] sm:h-[500px]">
          <Image
            src={theme === "dark" ? "/images/image.jpg" : "/images/slider.jpg"}
            alt=""
            layout="fill" // This allows the image to fill its container
            objectFit="cover" // This ensures the image covers the entire container
            className="rounded-3xl"
          />
        </div>
        <div
          className={`absolute top-0 left-0 tracking-[.1em] right-0 bottom-0 px-5 sm:px-10 flex flex-col justify-center items-start text-white rounded-3xl text-start ${
            showComponent ? "tracking-in-contract-bck" : ""
          }`}
        >
          <p className="sm:text-6xl text-[37px] font-semibold sm:mb-4 leading-[45px] sm:leading-[60px] py-3  ">
            {content.LandingTitle1} <br /> {content.LandingTitle2} <br />
            <span className="sm:tracking-wide text-[28px] sm:text-[45px] rounded-[50px] tracking-in-contract-bck px-3 font-light border-2 border-[#91A8B7]">
              {content.LandingTitleCircle}
            </span>
            <br />
            {content.LandingTitle3}
          </p>
          <Link href="tel:+37368548789" className="text-shadow-pop-left">
            <button
              className={`sm:px-8 ml-[-8px] px-3 py-1 sm:py-2 text-[14px] sm:text-lg sm:tracking-wider font-semibold mb-5 text-black bg-white rounded-[50px] hover:bg-opacity-70 hover:scale-[1.08] transition duration-500 ease-in-out ${
                showComponent ? "text-shadow-pop-left" : ""
              }ease-linear duration-500`}
            >
              {content.LandingContacts} +373 685 487 89
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
