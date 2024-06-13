/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = ({ images, captions, heading, text }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative max-w-[1200px] mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="object-cover w-full"
              />
              {captions && captions[index] && (
                <div className="absolute inset-0 h-2/4 w-1/2 mx-auto bg-white my-auto md:block hidden bg-opacity-90">
                  <p className="md:text-2xl text-lg text-center mt-8 text-red-500 bg-base-100 bg-opacity-50 rounded">
                    {captions[index]}
                  </p>
                  <div className="divider w-1/3 mx-auto">X</div>
                  <p className="text-2xl font-serif text-center font-bold bg-base-100 bg-opacity-50 p-2 rounded">
                    {heading[index]}
                  </p>
                  <p className="text-sm font-serif text-center bg-base-100 bg-opacity-50 p-2 rounded">
                    {text[index]}
                  </p>
                  <div className="text-center mt-5">
                    <button className="btn btn-outline text-red-500">
                      <Link href={"/"}>Continue Reading</Link>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1"
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1"
      >
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
