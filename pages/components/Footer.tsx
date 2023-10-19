import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Footer = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false, false]);

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  const handleIconHover = (index: number, isHovered: boolean) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = isHovered;
    setHoverStates(newHoverStates);
  };

  return (
    <>
      <div className="flex items-center justify-around p-10 text-center mb-10">
        <div className="flex ml-20">
          <Link
            href="https://www.instagram.com/two_2tek"
            className="hover:-translate-y-1 transition duration-500 ease-in-out"
          >
            <Image
              src={
                hoverStates[0]
                  ? "/images/instagram_hover.png"
                  : "/images/instagram.png"
              }
              alt=""
              width={30}
              height={10}
              className="mr-5"
              onMouseEnter={() => handleIconHover(0, true)}
              onMouseLeave={() => handleIconHover(0, false)}
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@_2.tek_"
            className="hover:-translate-y-1 transition duration-500 ease-in-out"
          >
            <Image
              src={
                hoverStates[1]
                  ? "/images/tik-tok_hover.png"
                  : "/images/tik-tok.png"
              }
              alt=""
              width={30}
              height={10}
              onMouseEnter={() => handleIconHover(1, true)}
              onMouseLeave={() => handleIconHover(1, false)}
            />
          </Link>
        </div>
        <div className="ml-20 text-sm">
          <h1>
            {content.FooterRealized} <span className="font-semibold">2Tek</span>
          </h1>
          <p className="text-xs">© 2023 {content.FooterRights}</p>
        </div>
        <div className="ml-20 text-sm">
          <h1 className="font-semibold">
            {content.FooterContact}
          </h1>
          <p className="text-xs underline ">two2tek@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
