import React, { useEffect, useRef, useState } from "react";
import "animate.css";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Parallax1 = () => {
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);
  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLHRElement | null>(null); // Update this line
  const h3Ref = useRef<HTMLDivElement | null>(null);
  const h4Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
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
    if (h4Ref.current && !hasAnimated) {
      const h4Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible5(true);
          setHasAnimated(true);
          h4Observer.unobserve(h4Ref.current!); // Use the non-null assertion operator here
        }
      });
      h4Observer.observe(h4Ref.current!); // Use the non-null assertion operator here
    }
  }, [hasAnimated]);

  const circleData = [
    {
      title: `${content.CirclesTitle1}`,
      description: `${content.CirclesText1}`,
    },
    {
      title: `${content.CirclesTitle2}`,
      description: `${content.CirclesText2}`,
    },
    {
      title: `${content.CirclesTitle3}`,
      description: `${content.CirclesText3}`,
    },
    {
      title: `${content.CirclesTitle4}`,
      description: `${content.CirclesText4}`,
    },
    {
      title: `${content.CirclesTitle5}`,
      description: `${content.CirclesText5}`,
    },
  ];

  const handleCircleHover = (index: number) => {
    setHoveredCircle(index);
  };

  const handleCircleLeave = () => {
    setHoveredCircle(null);
  };

  return (
    <>
      <div className="mb-32 mt-44 flex justify-evenly mx-32 items-center">
        <h1
          ref={h1Ref}
          className={`text-start text-5xl leading-[60px]  font-semibold
${isVisible2 ? "animate__animated animate__fadeInLeft" : ""}`}
          style={{ color: "var(--carousel_h1)" }}
        >
          {content.BlobsTitle1} <br /> {content.BlobsTitle2}
        </h1>
        <hr
          ref={h2Ref}
          className={`bg-[#008DFD] h-1 rounded-xl rotate-90 w-24
${isVisible3 ? "tracking-in-expand" : ""}`}
        />
        <p
          ref={h3Ref}
          className={` text-xl text-start
${isVisible4 ? "tilt-in-right-1" : ""}`}
          style={{ color: "var(--carousel_h1)" }}
        >
          {content.BlobsText1} <br /> {content.BlobsText2} <br />
          <span className="text-[#008DFD] font-semibold">
            {" "}
            {content.BlobsText3}
          </span>
        </p>
      </div>
      <div
        ref={h4Ref}
        className={`flex flex-col justify-between text-center items-center font-semibold text-white
${isVisible5 ? "fade-in-bck" : ""}`}
      >
        <div className="flex justify-between mb-10">
          {circleData.map((circle, index) => (
            <div
              key={index}
              className={`circle-box circle-box-${
                index + 1
              } shadow-md shadow-white border-[1px] ${
                hoveredCircle === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleCircleHover(index)}
              onMouseLeave={handleCircleLeave}
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3))",
              }}
            >
              {hoveredCircle !== index && ( // Only render title if it's not hovered
                <div className="circle-title ">{circle.title}</div>
              )}
              {hoveredCircle === index && (
                <div className="circle-description">{circle.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .circle-box {
          width: 230px;
          height: 230px;
          border-radius: 50%;
          margin-right: 5rem;
          animation: moveAround 5s linear infinite alternate;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease-in;
        }

        .circle-box.hovered {
          background-color: #a4bac8;
          animation-play-state: paused;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .circle-box .circle-title {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .circle-box .circle-description {
          display: none;
          background-color: transparent;
          padding: 20px;
          text-align: center;
          color: white;
        }

        .circle-box.hovered .circle-description {
          display: block;
        }

        .circle-box-1 {
          animation-name: moveAround1;
        }

        .circle-box-1:hover {
          transform: scale(1.6);
        }

        .circle-box-2 {
          animation-name: moveAround2;
        }

        .circle-box-3 {
          animation-name: moveAround3;
        }

        .circle-box-4 {
          animation-name: moveAround4;
        }

        .circle-box-5 {
          animation-name: moveAround5;
        }

        @keyframes moveAround1 {
          0% {
            transform: translate(70px, 10px);
          }
          100% {
            transform: translate(30px, -30px);
          }
        }

        @keyframes moveAround2 {
          0% {
            transform: translate(0, 2px);
          }
          100% {
            transform: translate(-30px, 30px);
          }
        }

        @keyframes moveAround3 {
          0% {
            transform: translate(0, -10px);
          }
          100% {
            transform: translate(-73px, 3px);
          }
        }

        @keyframes moveAround4 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-30px, -10px);
          }
        }

        @keyframes moveAround5 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(20px, -30px);
          }
        }
      `}</style>
    </>
  );
};

export default Parallax1;
