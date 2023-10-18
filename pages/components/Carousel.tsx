import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const logoData = [
  { src: "/images/sanduta.png", link: "" },
  { src: "/images/buffy.png", link: "https://admin090609.github.io/" },
  { src: "/images/a&d.png", link: "https://admin090609.github.io/" },
  { src: "/images/apisudex.png", link: "https://admin090609.github.io/" },
];

const Carousel = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State pentru a urmări dacă animația a fost deja activată

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

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
  }, [hasAnimated]);

  const handleMouseEnter = () => {
    setIsAnimationPaused(true);
  };

  const handleMouseLeave = () => {
    setIsAnimationPaused(false);
  };

  return (
    <>
      <h1
        ref={h1Ref}
        className={` mt-32 text-center text-4xl mb-20 font-semibold text-[#637684]
${isVisible2 ? "animate__animated animate__fadeInLeft" : ""}`}
      >
        {content.CarouselTitle1}
        <br />
        <span className="text-[#008DFD]">{content.CarouselSiteuri}</span>{" "}
        {content.CarouselTitle2}
      </h1>{" "}
      <div>
        <div
          ref={myRef}
          className={`${
            isVisible ? "animate__animated animate__slideInRight" : ""
          }`}
        >
          <div className="mt-12 logo-slider-container ">
            <div
              className={`logo-slider ${isAnimationPaused ? "paused" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {logoData.map((logo, index) => (
                <div key={index} className="logo-slide">
                  <Link href={logo.link} target="_blank">
                    <div className="w-100 h-100">
                      {/* Set the dimensions here */}
                      <Image
                        width={100}
                        height={100}
                        src={logo.src}
                        alt=""
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div
              className={`logo-slider ${isAnimationPaused ? "paused" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {logoData.map((logo, index) => (
                <div key={index} className="logo-slide">
                  <Link href={logo.link} target="_blank">
                    <div className="w-100 h-100">
                      {/* Set the dimensions here */}
                      <Image
                        width={100}
                        height={100}
                        src={logo.src}
                        alt=""
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
