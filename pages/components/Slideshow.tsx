// components/Slideshow.js
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/images/cal.png", "/images/echipa.jpg", "/images/echipa.jpg", "/images/echipa.jpg"];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto mt-10 relative">
      <div className="flex space-x-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-64 h-64 bg-cover bg-center rounded-lg ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-70 rounded-lg p-4 text-white transition-opacity duration-500">
              <div className="text-5xl font-bold">
                Proiectele <br /> Noastre
              </div>
              <div className="text-sm mt-2">Ceva text aici</div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <button
          onClick={prevSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded-full"
        >
          <Image src="/images/arrow.png" alt="" width={20} height={0} className="rotate-180"/>
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-3 rounded-full ml-4"
        >
          <Image src="/images/arrow.png" alt="" width={20} height={0} />
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
