import React, { useState, useEffect } from 'react';
import banner1 from "../assets/img/banner1.jpg"
import banner2 from "../assets/img/banner2.jpg"
import banner3 from "../assets/img/banner3.jpg"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Example image URLs
  const images = [
    banner1,
    banner2,
    banner3,
  ];

  // Autoplay: change slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 3000); // 3 seconds for autoplay

    return () => clearInterval(interval);
  }, [images.length]);

  // Function to change slide with fade effect
  const changeSlide = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 500); // Transition duration (same as CSS fade-out duration)
  };

  // Handle next and previous slide with manual buttons
  const goToNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsFading(false);
    }, 500);
  };

  const goToPrev = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="carousel w-full">
      {/* Carousel Images with Crossfade */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-item relative w-full transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
          style={{ display: currentIndex === index ? 'block' : 'none' }}
        >
          <img src={image} alt={`carousel ${index + 1}`} className="w-full h-[600px] object-cover" />
        </div>
      ))}

      {/* Previous Button */}
      <button
        className="btn btn-circle absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
        onClick={goToPrev}
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        className="btn btn-circle absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
        onClick={goToNext}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
