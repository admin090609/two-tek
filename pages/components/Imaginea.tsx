import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Slider() {
  const slideRef = useRef<HTMLDivElement | null>(null); // Specificăm tipul aici

  const handleNextClick = () => {
    if (slideRef.current) {
      const slides = slideRef.current.querySelectorAll(".item");
      const firstSlide = slides[0];
      slideRef.current.removeChild(firstSlide);
      slideRef.current.appendChild(firstSlide);
    }
  };

  const handlePrevClick = () => {
    if (slideRef.current) {
      const slides = slideRef.current.querySelectorAll(".item");
      const lastSlide = slides[slides.length - 1];
      slideRef.current.removeChild(lastSlide);
      slideRef.current.prepend(lastSlide);
    }
  };

  return (
    <div className="container">
      <div id="slide" ref={slideRef}>
        <div
          className="item"
          style={{ backgroundImage: "url(/images/ad-display.png)" }}
        >
          <div className="content">
            <div className="name">A&D Fitness</div>
            <a
              className="website"
              href="https://adfitness.vercel.app/"
              target="_blank"
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Vezi Website-ul</span>
            </a>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/images/apisudex-display.png)" }}
        >
          <div className="content">
            <div className="name">ApiSudex</div>
            <a
              className="website"
              href="https://apisudex.store/"
              target="_blank"
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Vezi Website-ul</span>
            </a>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/images/buffy-display.png)" }}
        >
          <div className="content">
            <div className="name">Buffy</div>
            <a
              className="website"
              href="https://admin090609.github.io/"
              target="_blank"
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Vezi Website-ul</span>
            </a>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/images/sanduta-display.png)" }}
        >
          <div className="content">
            <div className="name">Sănduța Art</div>

            <a
              className="website"
              href="https://sandutart.vercel.app/"
              target="_blank"
            >
              <span className="shadow"></span>
              <span className="edge"></span>
              <span className="front text">Vezi Website-ul</span>
            </a>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button id="prev" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button id="next" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}

export default Slider;
