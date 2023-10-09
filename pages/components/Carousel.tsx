import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import 'animate.css';

const logoData = [
  { src: "/images/sanduta.png", link: "" },
  { src: "/images/buffy.png", link: "https://admin090609.github.io/" },
  { src: "/images/a&d.png", link: "https://admin090609.github.io/" },
  { src: "/images/apisudex.png", link: "https://admin090609.github.io/" },
];

const Carousel = () => {
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimationPaused(true);
  };

  const handleMouseLeave = () => {
    setIsAnimationPaused(false);
  };
  return (
    <>
      <h1 className="mt-32 text-center text-4xl mb-20 font-semibold text-[#637684] animate__animated animate__flipInX">
        Transformăm ideile tale în <span className="text-[#008DFD]">site-uri</span>  <br /> funcționale și atrăgătoare.
      </h1>
      <div className="mt-12 logo-slider-container animate__fadeInBottomRight animate__animated">
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
    </>
  );
};

export default Carousel;
