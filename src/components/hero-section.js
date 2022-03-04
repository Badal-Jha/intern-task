import React, { useEffect } from "react";
import { HeroImages } from "./data";
import { useState } from "react";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const length = HeroImages.length;
  const scroll = true;
  let slideInterval;
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const autoScroll = () => {
    slideInterval = setInterval(nextImage, 4000);
  };
  useEffect(() => {
    if (scroll) {
      autoScroll();
    }
    return () => clearInterval(slideInterval);
  }, [current]);
  return (
    <div className="reletive flex flex-row lg:h-screen justify-center ">
      <i
        className="fa fa-chevron-right  z-10 absolute top-1/2 text-white right-8 lg:right-16 text-3xl bold cursor-pointer"
        aria-hidden="true"
        onClick={nextImage}
      ></i>
      <i
        className="fa fa-chevron-left  z-10 absolute top-1/2 text-white left-8 lg:left-16 text-3xl bold cursor-pointer"
        aria-hidden="true"
        onClick={prevImage}
      ></i>

      {HeroImages.map((item, index) => {
        return (
          <div
            key={index}
            className={
              current === index
                ? "transition duration-700"
                : "transition ease-linear duration-700 "
            }
          >
            {current === index && (
              <img
                src={item.image}
                alt="image"
                key={index}
                className="w-screen  h-[400px] md:h-[600px] lg:h-[652px] transition duration-700"
              ></img>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeroSection;
