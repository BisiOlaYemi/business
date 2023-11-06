"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const PlacioStrategy = () => {
  return (
    <div className="bg-violet-900 flex flex-col items-center justify-center text-center py-12">
      <h1 className="font-bold text-white text-5xl mb-8">
        With Placio insights, advance your business targets
      </h1>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-6xl mx-auto px-4">
        <div className=" rounded-lg p-4 w-full md:w-1/2">
          <Image
            src="/Images/Homepage/ec5.jpg"
            width={800}
            height={800}
            alt="journey"
            className="rounded-lg mb-4 w-full"
          />
          <p className="text-white text-2xl mb-4">
            To position yourself for success, read our most recent research,
            news, and best practices.
          </p>
          <Link href={"/#"} className="text-white text-xl hover:text-blue-700">
            Learn More
          </Link>
        </div>
        <div className=" rounded-lg p-4 w-full md:w-1/2 mt-8 md:mt-0">
          <Image
            src="/Images/Homepage/ec9.jpg"
            width={800}
            height={800}
            alt="Vases"
            className="rounded-lg mb-4 w-full"
          />
          <div className="text-white text-2xl mb-4">
            Innovative techniques for winning Concept ads
          </div>
          <Link href={"/#"} className="text-white text-xl hover:text-blue-700">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlacioStrategy;
