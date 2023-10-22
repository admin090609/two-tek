import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Echipa = () => {
  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null);
  const h3Ref = useRef<HTMLDivElement | null>(null);
  const h4Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State pentru a urmări dacă animația a fost deja activată

  useEffect(() => {
    if (h1Ref.current && !hasAnimated) {
      const h1Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible1(true);
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
          setIsVisible2(true);
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
          setIsVisible3(true);
          setHasAnimated(true);
          h3Observer.unobserve(h3Ref.current!); // Use the non-null assertion operator here
        }
      });
      h3Observer.observe(h3Ref.current!); // Use the non-null assertion operator here
    }
    if (h4Ref.current && !hasAnimated) {
      const h4Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible4(true);
          setHasAnimated(true);
          h4Observer.unobserve(h4Ref.current!); // Use the non-null assertion operator here
        }
      });
      h4Observer.observe(h4Ref.current!); // Use the non-null assertion operator here
    }
  }, [hasAnimated]);

  return (
    <>
      <div className="flex mt-44 justify-around items-center">
        <div className="max-w-lg">
          <h1
            ref={h1Ref}
            className={`text-6xl text-[#0B3558] font-bold mb-5 ${
              isVisible1 ? "scale-up-left" : ""
            }`}
          >
            {content.EchipaTitle1} <br /> {content.EchipaTitle2}
          </h1>
          <p
            ref={h2Ref}
            className={`text-[#637684] text-lg ${
              isVisible2 ? "slide-in-blurred-right" : ""
            }`}
          >
            {content.EchipaText}
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex">
            <div
              ref={h3Ref}
              className={`p-4 mr-10
${isVisible3 ? "slide-in-elliptic-right-fwd " : ""}`}
            >
              <Image
                src="/images/danu.jpeg"
                alt=""
                width={2264}
                height={100}
                className="rounded-[20px] w-[250px]"
              />
              <div id="curve" className="card">
                <div className="footer">
                  <div className="connections">
                    <div className="connection twitter">
                      <Link
                        href="https://www.instagram.com/loghindan/"
                        className="icon"
                      >
                        <Image
                          src="/images/instagram.png"
                          alt=""
                          width={200}
                          height={200}
                          className="w-[20px] h-[20px] mt-[7.85px] ml-[7.25px]"
                        />
                      </Link>
                    </div>
                    <div className="connection behance">
                      <Link
                        href="https://github.com/admin090609"
                        className="icon"
                      >
                        <Image
                          src="/images/github.png"
                          alt=""
                          width={200}
                          height={200}
                          className="w-[22.5px] h-[22.5px] mt-[3.5px] ml-[6px]"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="info">
                    <div className="name">{content.NumeDan}</div>
                    <div className="job">{content.Job}</div>
                  </div>
                </div>
                <div className="card-blur"></div>
              </div>
            </div>
            <div  ref={h4Ref} className={`p-4
${isVisible4 ? "slide-in-elliptic-left-fwd " : ""}`}>
              <Image
                src="/images/eduard.jpeg"
                alt=""
                width={2260}
                height={100}
                className="rounded-[20px] w-[250px]"
              />
              <div id="curve" className="card">
                <div className="footer">
                  <div className="connections">
                    <div className="connection twitter">
                      <Link
                        href="https://www.instagram.com/i_edy_/"
                        className="icon"
                      >
                        <Image
                          src="/images/instagram.png"
                          alt=""
                          width={200}
                          height={200}
                          className="w-[20px] h-[20px] mt-[7.85px] ml-[7.25px]"
                        />
                      </Link>
                    </div>
                    <div className="connection behance">
                      <Link
                        href="https://github.com/eduard134"
                        className="icon"
                      >
                        <Image
                          src="/images/github.png"
                          alt=""
                          width={200}
                          height={200}
                          className="w-[22.5px] h-[22.5px] mt-[3.5px] ml-[6px]"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="info">
                    <div className="name">{content.NumeEdu}</div>
                    <div className="job">{content.Job}</div>
                  </div>
                </div>
                <div className="card-blur"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Echipa;
