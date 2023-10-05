import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slideshow from "./components/Slideshow";

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
          <div className="absolute top-0 left-0 right-0 bottom-0 px-10 flex flex-col justify-center items-start text-white rounded-3xl text-start font-unbounded">
            <p className="text-6xl font-semibold mb-4 leading-tight  py-3">
              Creăm <br /> Profesional <br />
              <span className="tracking-wider text-[45px] rounded-[50px] px-3 font-light border-2 border-[#451D75]">
                WebSite-ul
              </span>
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

      <h1 className="text-center text-4xl mb-20">De ce să ne Alegeți</h1>
      <div className="flex justify-evenly mb-20 text-start">
        <div className="shadow-xl py-10 px-3 rounded-xl max-w-[400px]">
          <h1 className="text-xl font-semibold mb-5">Experiență 2+ Ani</h1>
          <p>
            Cu o experiență de peste 2 ani în dezvoltarea și design-ul de
            website-uri, suntem o echipă dedicată care oferă soluții
            personalizate pentru nevoile dvs. online. Am colaborat cu o
            varietate de clienți și proiecte, transformând conceptele în
            website-uri funcționale și atractive.
          </p>
        </div>
        <div className="shadow-xl py-10 px-3 rounded-xl max-w-[400px]">
          <h1 className="text-xl font-semibold mb-5">Întotdeauna Conectați</h1>
          <p>
            Pentru 2Tek, conectivitatea nu este doar un cuvânt, ci o acțiune
            rapidă și eficientă. Ne specializăm în oferirea unui nivel înalt de
            răspuns, asigurându-ne că site-ul dvs. rămâne în permanență la
            vârful performanței și că reacționăm rapid la cerințele și
            schimbările dvs.
          </p>
        </div>
        <div className="shadow-xl py-10 px-3 rounded-xl max-w-[400px]">
          <h1 className="text-xl font-semibold mb-5">Plata în Rate</h1>
          <p>
            La 2Tek, vă punem la dispoziție opțiuni de plată în rate
            avantajoase, astfel încât să puteți beneficia de serviciile noastre
            de top fără a vă afecta bugetul. Răspundem prompt și eficient în
            ceea ce privește flexibilitatea financiară, pentru a vă oferi
            întotdeauna cea mai bună experiență posibilă.
          </p>
        </div>
      </div>

      <h1 className="text-center text-4xl mb-20">Cum lucrăm noi</h1>
      <div className="flex justify-around items-center mb-5">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-normal">
            Share your Calendly <br /> availability with others
          </h1>
          <p className="text-2xl leading-normal">
            Grow your business with scheduling automation. Simply email, text,
            or add your Calendly availability to your website - and watch
            prospects and recruits book high-value meetings with you.
          </p>
        </div>
        <div>
          <Image src="/images/cal.png" alt="" width={500} height={300} />
        </div>
      </div>
      <div className="flex justify-around items-center mb-5">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-normal">
            Schedule as a team
          </h1>
          <p className="text-2xl leading-normal">
            Calendly adapts to both you and your team's scheduling preferences.
            Co-host a client call with a colleague, email reminders and
            follow-ups, and integrate everything with your preferred software
            tools.
          </p>
        </div>
        <div>
          <Image src="/images/cal.png" alt="" width={500} height={100} />
        </div>
      </div>
      <div className="flex justify-around items-center mb-5">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-normal">
            Hit your number
          </h1>
          <p className="text-2xl leading-normal">
            High-value meetings are the lifeblood of your business. Increase
            revenue, retain customers, and land recruits with the #1 scheduling
            automation platform.
          </p>
        </div>
        <div>
          <Image src="/images/cal.png" alt="" width={500} height={100} />
        </div>
      </div>

      <div className="flex mt-20 justify-around items-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-5">
            Echipa <br /> Noastră
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ut,
            nam dignissimos laborum ullam saepe vero enim. Qui, vel. Doloremque
            est facere maxime consequatur distinctio omnis praesentium porro
            delectus placeat.
          </p>
        </div>
        <div>
          <Image src="/images/echipa.jpg" alt="" width={600} height={100} />
        </div>
      </div>

      <div>
        <Slideshow/>
      </div>
    </>
  );
}
