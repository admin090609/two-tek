import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

function Info() {
  const [showComponent, setShowComponent] = useState(false);

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  useEffect(() => {
    // Setăm `showComponent` la `true` după o întârziere scurtă pentru a declanșa animația
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 500);
  }, []);

  return (
    <div
      className={`mt-20 text-center relative ${
        showComponent ? "text-focus-in" : "opacity-0 translate-y-[-50px]"
      }`}
    >
      <div className="w-[70vw] mx-auto relative">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ width: "100%", height: "500px" }}
        >
          <Image
            src="/images/slider.jpg"
            alt=""
            layout="fill" // This allows the image to fill its container
            objectFit="cover" // This ensures the image covers the entire container
            className="rounded-3xl"
          />
        </div>
        <div
          className={`absolute top-0 left-0 tracking-[.1em] right-0 bottom-0 px-10 flex flex-col justify-center items-start text-white rounded-3xl text-start ${
            showComponent ? "tracking-in-contract-bck" : ""
          }`}
        >
          <p className="text-6xl font-semibold mb-4 leading-[60px] py-3  ">
            {content.LandingTitle1} <br /> {content.LandingTitle2} <br />
            <span className="tracking-wide text-[45px] rounded-[50px] tracking-in-contract-bck px-3 font-light border-2 border-[#91A8B7]">
              {content.LandingTitleCircle}
            </span>
            <br />
            {content.LandingTitle3}
          </p>
          <Link href="tel:+37368548789" className="text-shadow-pop-left">
            <button
              className={`px-8 py-2 tracking-wider  font-semibold mb-5 text-black bg-white rounded-[50px] hover:bg-opacity-70 hover:scale-[1.08] transition duration-500 ease-in-out ${
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
