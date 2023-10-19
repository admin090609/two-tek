import React, { useState } from "react";

const Parallax1 = () => {
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);

  const circleData = [
    {
      title: "Dominați cu noi",
      description:
        "Dezvoltăm website-uri captivante pentru a vă diferenția de concurență și a atrage atenția publicului dvs.",
    },
    {
      title: "Operăm cu rapiditate",
      description:
        "Suntem alegerea perfectă pentru a vă construi cu viteză și eficiență web-siteul dvs.",
    },
    {
      title: "Experiență 2+ Ani",
      description:
        "Peste 2 ani experiență în dezvoltarea și design-ul web, creăm site-uri personalizate și funcționale.",
    },
    {
      title: "Plata în Rate",
      description:
        "2Tek vă oferă servicii de top cu opțiuni de plată în rate pentru o experiență financiară excelentă.",
    },
    {
      title: "Întotdeauna Conectați",
      description:
        "2Tek oferă conectivitate și performanță rapidă, cu un accent pe răspuns eficient.",
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
      <h1 className="text-center text-4xl mb-32 text-[#637684] mt-44 font-semibold">
        Care sunt <span className="text-[#008DFD]">avantajele</span> de a lucra
        cu noi
      </h1>
      <div className="flex flex-col justify-between text-center items-center text-white ">
        <div className="flex justify-between mb-10">
          {circleData.map((circle, index) => (
            <div
              key={index}
              className={`circle-box circle-box-${
                index + 1
              } shadow-md shadow-black ${
                hoveredCircle === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleCircleHover(index)}
              onMouseLeave={handleCircleLeave}
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
          background-color: black;
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
          animation-play-state: paused;
          transform: scale(1.2);
          border-radius: 70px;
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
