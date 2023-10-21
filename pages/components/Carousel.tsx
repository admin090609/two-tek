import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const logoData = [
  { src: "/images/sanduta.png", link: "" },
  { src: "/images/buffy.png", link: "https://admin090609.github.io/" },
  { src: "/images/a&d.png", link: "https://adfitness.vercel.app/" },
  { src: "/images/apisudex.png", link: "https://apisudex.store/" },
];

const Carousel = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLHRElement | null>(null); // Update this line
  const h3Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
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
    if (h3Ref.current && !hasAnimated) {
      const h3Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible4(true);
          setHasAnimated(true);
          h3Observer.unobserve(h3Ref.current!); // Use the non-null assertion operator here
        }
      });
      h3Observer.observe(h3Ref.current!); // Use the non-null assertion operator here
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
      <div className="mt-32 mb-20  flex-col justify-evenly mx-32 items-center">
        <h1
          ref={h1Ref}
          className={` text-center text-4xl mb-7 font-semibold text-[#0B3558]
${isVisible2 ? "tracking-in-expand-fwd-top" : ""}`}
        >
          {content.CarouselTitle}
        </h1>
        <hr
          ref={h2Ref}
          className={` bg-[#008DFD] h-1 rounded-xl flex justify-center items-center mb-7 mx-[25vw]
${isVisible3 ? "tracking-in-expand" : ""}`}
        />

        <p
          ref={h3Ref}
          className={`text-[#0B3558] text-xl text-center mx-[19vw]
${isVisible4 ? "tilt-in-left-1" : ""}`}
        >
          {content.CarouselText1}
          <span className="text-[#008DFD] font-semibold">
            {" "}
            {content.CarouselText2}
          </span>
        </p>
      </div>
      <div>
        <div ref={myRef} className={`${isVisible ? "tilt-in-right-2" : ""}`}>
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
