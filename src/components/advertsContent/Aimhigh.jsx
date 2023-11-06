"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Aimhigh = () => {
  return (
    <div className="container mx-auto py-12 mt-44">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-white text-5xl mb-8">
          Aim high and deliver
        </h1>
        <div className="text-white text-2xl mb-4">
          To ensure you're getting the best results, you can enable additional
          optimizations in this last stage before launching your campaign. You
          may execute more effective campaigns and make the most of your
          budgetwith the aid of these optimizations. Ads Manager offers advice
          to guide you as you make these crucial selections, allowing you to
          select the one that is ideal for your campaign.
        </div>
        <Link href={"/#"} className="text-white text-xl hover:text-blue-700">
          Learn More
        </Link>
      </div>
      <div className="rounded-lg p-4 md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/Images/Homepage/ec9.jpg"
          width={800}
          height={800}
          alt="Vases"
          className="rounded-lg mb-4 w-full transition duration-500 ease-in-out transform hover:scale-115"
        />
      </div>
    </div>
  );
};

export default Aimhigh;
