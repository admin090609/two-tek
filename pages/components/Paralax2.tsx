import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "animate.css";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Paralax2 = () => {
  const div1Ref = useRef<HTMLDivElement | null>(null);
  const div2Ref = useRef<HTMLDivElement | null>(null);
  const div3Ref = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
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

    const observer5 = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer5.unobserve(div3Ref.current!);
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

    if (h2Ref.current) {
      observer5.observe(h2Ref.current);
    }
  }, []);

  return (
    <>
      <div className="mt-56 mx-64">
        <h1
          ref={h1Ref}
          className={`text-center text-5xl text-[#0B3558] font-semibold ${
            isVisible ? "tracking-in-contract-bck-top" : ""
          }`}
        >
          {content.HowTitle1}{" "}
          <span className="text-[#008DFD]">{content.HowTitle2}</span>{" "}
          {content.HowTitle3}
        </h1>
        <p
          ref={h2Ref}
          className={`text-center text-2xl mb-20 mt-7 leading-[35px] text-[#637684] ${
            isVisible ? "tracking-in-contract-bck-bottom" : ""
          }`}
        >
          În cadrul metodei noastre de lucru, punem accent pe lucru în echipă și
          comunicarea eficientă, astfel încât să atingem cu succes obiectivele
          stabilite.
        </p>
      </div>
      <div
        ref={div1Ref}
        className={`flex justify-around items-center mb-12 shadow-xl mr-20 ml-96 rounded-md bg-[#EDEDED] ${
          isVisible1
            ? "animate__animated animate__fadeInTopLeft animate__delay-2s"
            : ""
        }`}
        style={{
          background: "linear-gradient(135deg, #00A8CC, #0060A8)", // Keep the original colors or change them as needed
        }}
      >
        <div className="max-w-2xl hover:-translate-y-1 transition duration-500 ease-in-out">
          <h1 className="text-3xl font-bold mb-5 leading-tight">
            {content.HowBoxTitle1} <br /> {content.HowBoxTitle2}
          </h1>
          <p className="text-xl leading-normal">{content.HowBoxText}</p>
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
        className={`flex justify-around items-center mb-12 shadow-xl mx-44 ml-20 mr-96 rounded-md bg-[#EDEDED] ${
          isVisible2
            ? "animate__animated animate__fadeInTopRight animate__delay-2s"
            : ""
        }`}
        style={{
          background: "linear-gradient(135deg, #00A8CC, #0060A8)", // Keep the original colors or change them as needed
        }}
      >
        <div className="max-w-2xl hover:-translate-y-1 transition duration-500 ease-in-out">
          <h1 className="text-3xl font-bold mb-5 leading-normal">
            {content.HowBoxTitlev2}
          </h1>
          <p className="text-xl leading-normal">{content.HowBoxTextv2}</p>
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
        className={`flex justify-around items-center mb-12 shadow-xl mx-44 mr-20 ml-96 rounded-md bg-[#EDEDED] ${
          isVisible3
            ? "animate__animated animate__fadeInLeft animate__delay-2s"
            : ""
        }`}
        style={{
          background: "linear-gradient(135deg, #00A8CC, #0060A8)", // Keep the original colors or change them as needed
        }}
      >
        <div className="max-w-2xl hover:-translate-y-1 transition duration-500 ease-in-out ">
          <h1 className="text-3xl font-bold mb-5 leading-normal">
            {content.HowBoxTitlev3}
          </h1>
          <p className="text-xl leading-normal">{content.HowBoxTextv3}</p>
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
