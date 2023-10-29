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
      threshold: 0.0001,
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
      <div className=" mt-96 sm:mt-64 sm:mx-64">
        <h1
          ref={h1Ref}
          className={`text-center text-2xl sm:text-5xl font-semibold ${
            isVisible ? "slide-in-bck-top" : ""
          }`}
          style={{ color: "var(--carousel_h1)" }}
        >
          {content.HowTitle1}{" "}
          <span className="text-[#008DFD]">{content.HowTitle2}</span>{" "}
          {content.HowTitle3}
        </h1>
        <p
          ref={h2Ref}
          className={`text-center sm:text-2xl mb-10 sm:mb-20 sm:mt-7 mt-5 sm:leading-[35px] ${
            isVisible ? "slide-in-bck-bottom" : ""
          }`}
          style={{ color: "var(--carousel_p)" }}
        >
          {content.HowText}
        </p>
      </div>
      <div
        ref={div1Ref}
        className={`flex sm:flex-row flex-col justify-around items-center mx-2 sm:mx-0 mb-12 sm:mr-20 sm:ml-80 p-4 rounded-md ${
          isVisible1 ? "tilt-in-fwd-tl" : ""
        }`}
        style={{
          background:
            "linear-gradient(120deg, var(--carousel_gradient1), var(--carousel_gradient2))", // Keep the original colors or change them as needed
        }}
      >
        <div className="sm:max-w-2xl hover:-translate-y-1 transition duration-500 ease-in-out">
          <h1 className="sm:text-3xl text-2xl text-center sm:text-start font-bold mb-5 sm:leading-tight">
            {content.HowBoxTitle1}
          </h1>
          <p
            className="sm:text-xl text-center sm:text-start  sm:leading-normal"
            style={{ color: "var(--paralax_p)" }}
          >
            {content.HowBoxText}
          </p>
        </div>
        <div className="sm:w-[20%] w-[60%]">
          <Image
            src="/images/search.png"
            alt=""
            width={200}
            height={100}
            className="sm:py-5"
          />
        </div>
      </div>

      <div
        ref={div2Ref}
        className={`flex sm:flex-row flex-col justify-around items-center mb-12 shadow-xl mx-2 sm:mx-44 sm:ml-20 sm:mr-80 p-4 rounded-md ${
          isVisible2 ? "tilt-in-fwd-tr" : ""
        }`}
        style={{
          background:
            "linear-gradient(120deg, var(--carousel_gradient1), var(--carousel_gradient2))", // Keep the original colors or change them as needed
        }}
      >
        <div className="sm:max-w-2xl hover:-translate-y-1 transition duration-500 ease-in-out">
          <h1 className="sm:text-3xl font-bold  text-2xl text-center sm:text-start  mb-5 leading-normal">
            {content.HowBoxTitlev2}
          </h1>
          <p
            className="sm:text-xl text-center sm:text-start sm:leading-normal"
            style={{ color: "var(--paralax_p)" }}
          >
            {content.HowBoxTextv2}
          </p>
        </div>
        <div className="sm:w-[20%] w-[60%]">
          <Image
            src="/images/web.png"
            alt=""
            width={200}
            height={100}
            className="sm:py-5"
          />
        </div>
      </div>

      <div
        ref={div3Ref}
        className={`flex sm:flex-row flex-col justify-around items-center mb-12 shadow-xl mx-2 sm:mx-44 sm:mr-20 sm:ml-80 p-4 rounded-md   ${
          isVisible3 ? "tilt-in-fwd-tl" : ""
        }`}
        style={{
          background:
            "linear-gradient(120deg, var(--carousel_gradient1), var(--carousel_gradient2))", // Keep the original colors or change them as needed
        }}
      >
        <div className="sm:max-w-2xl hover:-translate-y-1 transition duration-500 ease-in-out ">
          <h1 className="sm:text-3xl font-bold mb-5  text-2xl text-center sm:text-start  leading-normal">
            {content.HowBoxTitlev3}
          </h1>
          <p
            className="sm:text-xl text-center sm:text-start sm:leading-normal"
            style={{ color: "var(--paralax_p)" }}
          >
            {content.HowBoxTextv3}
          </p>
        </div>
        <div className="sm:w-[20%] w-[60%]">
          <Image
            src="/images/mobile.png"
            alt=""
            width={200}
            height={100}
            className="sm:py-5"
          />
        </div>
      </div>
    </>
  );
};

export default Paralax2;
