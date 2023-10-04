import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const logoData = [
  { src: "/images/sanduta.png", link: "" },
  { src: "/images/buffy.png", link: "https://admin090609.github.io/" },
  { src: "/images/a&d.png", link: "https://admin090609.github.io/" },
  { src: "/images/apisudex.png", link: "https://admin090609.github.io/" },
];

export default function Home() {
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimationPaused(true);
  };

  const handleMouseLeave = () => {
    setIsAnimationPaused(false);
  };

  return (
    <>
      <div className="mt-20 text-center relative">
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
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white rounded-3xl mx-16 text-start font-unbounded">
            <p className="text-6xl font-semibold mb-4 px-10 py-3">
              Creăm <br /> Profesional <br />{" "}
              <span className="tracking-wider text-[45px] rounded-[50px] px-3 font-light border-2 border-[#451D75]">
                WebSite-ul
              </span>{" "}
              <br />
              Dumneavoastră
            </p>
            <Link href="tel:+37368548789">
              <button className="px-8 py-2 font-semibold mb-5 text-black bg-white rounded-[50px]">
                Contactează-ne la +373 685 487 89
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="mt-20 text-center text-4xl mb-20">
        Transformăm ideile tale în site-uri <br /> funcționale și atrăgătoare.
      </h1>
      <div className="mt-12 logo-slider-container">
        <div
          className={`logo-slider ${isAnimationPaused ? "paused" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {logoData.map((logo, index) => (
            <div key={index} className="logo-slide">
              <Link href={logo.link} target="_blank">
                <div className="w-100 h-100">
                  {" "}
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
                  {" "}
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
}
