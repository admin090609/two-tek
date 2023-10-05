// components/Slideshow.js
import { useEffect, useState } from 'react';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['1.jpg', '4.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
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
            className={`w-32 h-32 bg-cover bg-center rounded-lg ${
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gray-800 bg-opacity-70 rounded-lg p-4 text-white transition-opacity duration-500">
              <div className="text-xl font-bold">LUNDEV</div>
              <div className="text-sm mt-2">
                Tinh ru anh di chay pho, chua kip chay pho thi anh chay mat tieu
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 mt-2">
                See more
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-4 flex justify-center">
        <button
          onClick={prevSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full ml-4"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
