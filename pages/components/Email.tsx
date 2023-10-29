import { useState, useEffect, useRef } from "react";
import { a, useTrail } from "react-spring";
import Image from "next/image";
import "animate.css";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";
import React from "react";

const Email = () => {
  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State pentru a urmări dacă animația a fost deja activată

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");

  const [[{ width, opacity }, { scale }], api] = useTrail(2, () => ({
    width: 200,
    opacity: 1,
    scale: 0,
  }));

  const openEmailInput = () => {
    api.start({
      width: 320,
      opacity: 0,
      scale: 1,
      onRest: () => setOpen(true),
    });
  };

  const closeEmailInput = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (emailValue === "") {
      setEmailError(`${content.EmailCompleteEmail}`);
      return;
    }

    setFormVisible(false);
    setSubmitted(true);

    api.start({
      width: 200,
      opacity: 1,
      scale: 0,
      onRest: () => {
        setOpen(false);
      },
    });
  };

  const resetForm = () => {
    setFormVisible(true);
    setSubmitted(false);
    setEmailValue("");
    setEmailError("");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("emailFormState") === "submitted") {
        setFormVisible(false);
        setSubmitted(true);
      } else {
        resetForm();
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (formVisible) {
        localStorage.setItem("emailFormState", "visible");
      } else {
        localStorage.setItem("emailFormState", "submitted");
      }
    }
  }, [formVisible]);

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
      <div>
        <div
          className="flex justify-between items-center mx-72 rounded-lg px-16 py-5 mb-16"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--eamil_bg1), var(--eamil_bg2), var(--eamil_bg3))",
          }}
        >
          <div
            ref={h1Ref}
            className={`
${isVisible2 ? "fade-in-bottom " : ""}`}
          >
            <h1 className="text-white text-3xl font-semibold mb-5 ">
              {content.EmailTitle1} <br /> {content.EmailTitle2}
            </h1>
            <div className="flex items-center">
              <div className="relative w-[80%]">
                <div className="relative flex justify-center h-12">
                  {formVisible ? (
                    <a.form
                      style={{
                        width,
                        opacity: opacity.to((o) => 1 - o),
                        pointerEvents: open ? "unset" : "none",
                      }}
                      onSubmit={closeEmailInput}
                      className="w-20 absolute text-gray-300 flex py-1 pl-4 pr-1 border rounded-full"
                    >
                      <input
                        name="email"
                        type="email"
                        className="focus:outline-none flex-grow bg-transparent "
                        placeholder="Email Address"
                        value={emailValue}
                        onChange={(e) => {
                          setEmailValue(e.target.value);
                          setEmailError("");
                        }}
                      />
                      <a.button
                        type="submit"
                        style={{ scale }}
                        className="px-4 py-1 text-black bg-white rounded-full"
                      >
                        {content.EmailSend}
                      </a.button>
                    </a.form>
                  ) : (
                    <>
                      <a.button
                        onClick={resetForm}
                        className="text-gray-400 cursor-pointer mt-12 text-sm"
                      >
                        {content.EmailComplete}
                      </a.button>
                    </>
                  )}
                  <a.button
                    onClick={openEmailInput}
                    style={{
                      width,
                      opacity,
                      pointerEvents: open ? "none" : "unset",
                    }}
                    className="absolute text-white px-4 py-2 border rounded-full font-semibold"
                  >
                    <a.span style={{ opacity }}>
                      {formVisible
                        ? `${content.EmailAnounce}`
                        : `${content.EmailThanks}`}
                    </a.span>
                  </a.button>
                </div>
                <div className="text-center text-red-500">{emailError}</div>{" "}
                {/* Centrare text eroare */}
              </div>
            </div>
          </div>
          <div
            ref={h2Ref}
            className={`
${isVisible2 ? "fade-in-right " : ""}`}
          >
            <Image
              src="/images/send.png"
              alt=""
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <iframe
        className="border-transparent w-full"
        height="270px"
        src="https://noteforms.com/forms/mail-oakabe"
      ></iframe>
    </>
  );
};

export default Email;
