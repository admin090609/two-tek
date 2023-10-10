import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "animate.css";
import { observe } from "react-intersection-observer";

const logoData = [
  { src: "/images/sanduta.png", link: "" },
  { src: "/images/buffy.png", link: "https://admin090609.github.io/" },
  { src: "/images/a&d.png", link: "https://admin090609.github.io/" },
  { src: "/images/apisudex.png", link: "https://admin090609.github.io/" },
];

const Carousel = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  console.log("isVisible", isVisible);

  useEffect(() => {
    if (myRef.current) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      });
      observer.observe(myRef.current);
    }
  }, []);

  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimationPaused(true);
  };

  const handleMouseLeave = () => {
    setIsAnimationPaused(false);
  };
  return (
    <>
      <h1 className="mt-32 text-center text-4xl mb-20 font-semibold text-[#637684] animate__animated animate__slideInDown">
        Transformăm ideile tale în{" "}
        <span className="text-[#008DFD]">site-uri</span> <br /> funcționale și
        atrăgătoare.
      </h1>{" "}
      <div>
        <div ref={myRef} className={`${isVisible ? "add-logos" : ""}`}>
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
