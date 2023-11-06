"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import useImageCarousel from "../hooks/imageSliders";
import Image from "next/image";

export default function InsightSlide2() {
  const images = [
    {
      src: "/Images/Homepage/1.svg",
      width: 500,
      height: 500,
    },
    {
      src: "/Images/Homepage/3.svg",
      width: 500,
      height: 500,
    },
  ];

  const [activeIndex, setActiveIndex] = useImageCarousel(images, 5000);
  return (
    <div className="relative h-full overflow-hidden">
      <div className="relative h-full transition-opacity duration-1000">
        {images.map((item, index) => {
          return (
            <Image
              key={index}
              src={item}
              className={`h-full w-full object-cover ${
                activeIndex === index ? "block" : "hidden"
              }`}
              alt="Sliders"
            />
          );
        })}
      </div>

      <div className="absolute bottom-5 right-0 left-0 flex justify-center space-x-2 pb-2 max-w-[600px] mx-auto">
        {images.map((item, index) => {
          return (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                activeIndex === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
