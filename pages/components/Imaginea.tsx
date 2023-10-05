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
          style={{ backgroundImage: "url(/images/cal.png)" }}
        >
          <div className="content">
            <div className="name">LUNDEV1</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/images/slider.png)" }}
        >
          <div className="content">
            <div className="name">LUNDEV2</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/images/echipa.jpg)" }}
        >
          <div className="content">
            <div className="name">LUNDEV3</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(/images/sanduta.png)" }}
        >
          <div className="content">
            <div className="name">LUNDEV4</div>
            <div className="des">
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
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
