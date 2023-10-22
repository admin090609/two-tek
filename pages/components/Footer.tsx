import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Footer = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false, false]);
  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State pentru a urmări dacă animația a fost deja activată

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  const handleIconHover = (index: number, isHovered: boolean) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = isHovered;
    setHoverStates(newHoverStates);
  };

  useEffect(() => {
    if (myRef.current && !hasAnimated) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(myRef.current!); // Use the non-null assertion operator here
        }
      });
      observer.observe(myRef.current!); // Use the non-null assertion operator here
    }

    if (h1Ref.current && !hasAnimated) {
      const h1Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible2(true);
          setHasAnimated(true);
          h1Observer.unobserve(h1Ref.current!); // Use the non-null assertion operator here
        }
      });
      h1Observer.observe(h1Ref.current!); // Use the non-null assertion operator here
    }

    if (h2Ref.current && !hasAnimated) {
      const h2Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible3(true);
          setHasAnimated(true);
          h2Observer.unobserve(h2Ref.current!); // Use the non-null assertion operator here
        }
      });
      h2Observer.observe(h2Ref.current!); // Use the non-null assertion operator here
    }
  }, [hasAnimated]);
  return (
    <>
      <div className="flex items-center justify-around p-10 text-center mb-10">
        <div
          ref={h1Ref}
          className={`flex ml-20  ${
            isVisible2 ? "tracking-in-expand-fwd-bottom1" : ""
          }`}
        >
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
        <div
          ref={myRef}
          className={`ml-20 text-sm  ${
            isVisible ? "tracking-in-expand-fwd-bottom1" : ""
          }`}
        >
          <h1>
            {content.FooterRealized} <span className="font-semibold">2Tek</span>
          </h1>
          <p className="text-xs">© 2023 {content.FooterRights}</p>
        </div>
        <div
          ref={h1Ref}
          className={`ml-20 text-sm  ${
            isVisible ? "tracking-in-expand-fwd-bottom1" : ""
          }`}
        >
          <h1 className="font-semibold">{content.FooterContact}</h1>
          <p className="text-xs underline ">two2tek@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
