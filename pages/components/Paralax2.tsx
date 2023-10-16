import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "animate.css";

const Paralax2 = () => {
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);
  const div3Ref = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer1 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible1(true);
        observer1.unobserve(div1Ref.current!);
      }
    }, observerOptions);

    const observer2 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible2(true);
        observer2.unobserve(div2Ref.current!);
      }
    }, observerOptions);

    const observer3 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible3(true);
        observer3.unobserve(div3Ref.current!);
      }
    }, observerOptions);

    const observer4 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer4.unobserve(div3Ref.current!);
      }
    }, observerOptions);

    if (div1Ref.current) {
      observer1.observe(div1Ref.current);
    }

    if (div2Ref.current) {
      observer2.observe(div2Ref.current);
    }

    if (div3Ref.current) {
      observer3.observe(div3Ref.current);
    }

    if (h1Ref.current) {
      observer4.observe(h1Ref.current);
    }
  }, []);

  return (
    <>
      <h1
        ref={h1Ref}
        className={`text-center text-4xl mb-20 mt-20 font-semibold text-[#637684] ${
          isVisible ? "animate__animated animate__backInDown" : ""
        }`}
      >
        {" "}
        Modul <span className="text-[#008DFD]">nostru</span> de lucru
      </h1>

      <div
        ref={div1Ref}
        className={`flex justify-around items-center mb-12 shadow-xl mx-10 rounded-md bg-[#EDEDED] ${
          isVisible1 ? "animate__animated animate__fadeInTopLeft" : ""
        }`}
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-5 leading-tight">
            Analiza produsului <br /> și crearea sarcinilor tehnice
          </h1>
          <p className="text-xl leading-normal">
            Ne vom implica într-un dialog constructiv cu clientul nostru pentru
            a discuta în detaliu despre produsul nostru, apoi preluăm
            responsabilitatea de a elabora specificațiile tehnice, împărțindu-le
            în grupuri mici printre colegii noștri.
          </p>
        </div>
        <div>
          <Image
            src="/images/search.png"
            alt=""
            width={250}
            height={100}
            className="py-5"
          />
        </div>
      </div>

      <div
        ref={div2Ref}
        className={`flex justify-around items-center mb-12 shadow-xl mx-10 rounded-md bg-[#EDEDED] ${
          isVisible2 ? "animate__animated animate__fadeInTopRight" : ""
        }`}
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold mb-5 leading-normal">
            Împărțirea lucrării în etape
          </h1>
          <p className="text-xl leading-normal">
            Divizăm procesul în etape. În prima săptămână, ne concentrăm pe
            crearea designului web și lucrăm la acest aspect până când sunteți
            complet mulțumit cu produsul final.
          </p>
        </div>
        <div>
          <Image
            src="/images/web.png"
            alt=""
            width={250}
            height={100}
            className="py-5"
          />
        </div>
      </div>

      <div
        ref={div3Ref}
        className={`flex justify-around items-center mb-12 shadow-xl mx-10 rounded-md bg-[#EDEDED] ${
          isVisible3 ? "animate__animated animate__fadeInLeft" : ""
        }`}
      >
        <div className="max-w-2xl ">
          <h1 className="text-3xl font-bold mb-5 leading-normal">
            Dezvoltarea produsului și suportului său
          </h1>
          <p className="text-xl leading-normal">
            Dezvoltarea produsului, inclusiv toate aspectele legate de design,
            producție, actualizări, și serviciile oferite pentru a asigura buna
            funcționare a acestuia.
          </p>
        </div>
        <div>
          <Image
            src="/images/mobile.png"
            alt=""
            width={250}
            height={100}
            className="py-5"
          />
        </div>
      </div>
    </>
  );
};

export default Paralax2;
