import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderInterval = useRef(null);

  // Add your image URLs here
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, [images.length]);

  const startSlider = () => {
    stopSlider(); // clear old one if exists
    sliderInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopSlider = () => {
    if (sliderInterval.current) {
      clearInterval(sliderInterval.current);
      sliderInterval.current = null;
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-roboto">
      {/* ---- Background Animations ---- */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${
              mousePosition.y * 0.1
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-amber-300 to-amber-500 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.05}px, ${
              -mousePosition.y * 0.05
            }px)`,
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        ></div>
      </div>

      {/* ---- Content Grid ---- */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl w-full">
          {/* ---- Left Content ---- */}
          <div
            className={`space-y-6 lg:space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
          >
            {/* Heading */}
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent animate-pulse">
                Welcome to
              </h1>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-2">
                <span className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent">
                  Microsys
                </span>
              </h1>
              <div className="mt-4 h-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full transform scale-x-0 animate-[scaleX_1s_ease-out_0.5s_forwards] origin-left"></div>
            </div>

            {/* Paragraph */}
            <div
              className={`transform transition-all duration-1000 ease-out delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-light">
                <span className="font-semibold text-amber-700">Microsys</span>{" "}
                is a leading center for{" "}
                <span className="text-amber-600 font-medium">
                  MS-CIT training
                </span>
                , helping students master essential computer skills with
                confidence.
              </p>
            </div>

            {/* Button */}
            <div
              className={`transform transition-all duration-1000 ease-out delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <Link to="/courses">
                <button className="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 lg:px-10 py-3 lg:py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold text-base lg:text-lg">
                  <span className="relative z-10">Get Started</span>
                </button>
              </Link>
            </div>
          </div>

          {/* ---- Image Slider ---- */}
          <div
            className={`flex justify-center transform transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-12 opacity-0"
            }`}
          >
            <div className="relative group w-full max-w-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative bg-white p-2 rounded-3xl overflow-hidden">
                {/* Image Slider Container */}
                <div
                  className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl"
                  onMouseEnter={stopSlider}
                  onMouseLeave={startSlider}
                >
                  <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{
                      transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                  >
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`w-full h-full flex-shrink-0 relative ${
                          currentSlide === index ? "opacity-100" : "opacity-40"
                        } transition-all duration-700`}
                      >
                        <img
                          src={image}
                          alt={`Microsys Slide ${index + 1}`}
                          className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-700"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                        {/* Caption */}
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg sm:text-xl font-semibold drop-shadow-lg">
                            Microsys Training
                          </h3>
                          <p className="text-xs sm:text-sm opacity-90">
                            Slide {index + 1} of {images.length}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? "bg-amber-500 scale-125"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() =>
                      setCurrentSlide(
                        (prev) => (prev - 1 + images.length) % images.length
                      )
                    }
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    ◀
                  </button>

                  <button
                    onClick={() =>
                      setCurrentSlide((prev) => (prev + 1) % images.length)
                    }
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    ▶
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
