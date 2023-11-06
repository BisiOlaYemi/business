/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Brands = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-white text-5xl mb-8">
          Brands and Creators see strong results
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-4 text-center">
          <div className="rounded-lg p-4 md:w-1/2">
            <Image
              src="/Images/Homepage/ec5.jpg"
              alt="journey"
              width={800}
              height={800}
              className="rounded-lg mb-4 w-full"
            />
            <div className="text-white text-2xl mb-4">
              Conversion rates increased by 222% when Placio users were exposed
              to CPM and CPC advertisements, demonstrating the platform's
              genuine worth for performing full-funnel activities.
            </div>
            <Link
              href={"/#"}
              className="text-white text-xl hover:text-blue-700"
            >
              Learn More
            </Link>
          </div>
          <div className="rounded-lg p-4 md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/Images/Homepage/ec9.jpg"
              alt="journey"
              width={800}
              height={800}
              className="rounded-lg mb-4 w-full"
            />
            <div className="text-white text-2xl mb-4">
              The fashion and travel expert was able to connect with a highly
              engaged audience because to Placio, which helped her gain 148%
              more followers in a single month.
            </div>
            <Link
              href={"/#"}
              className="text-white text-xl hover:text-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
