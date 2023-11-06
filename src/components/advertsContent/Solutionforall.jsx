"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Solutionforall = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-44 md:mt-44 px-4">
      <div className="md:w-2/3">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Solution for all objectives
        </h1>
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Awareness</h3>
          <p className="text-lg md:text-xl">
            Expand your audience and raise awareness of your business or
            product.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Consideration
          </h3>
          <p className="text-lg md:text-xl">
            Gain more visitors to your content, whether it's on Placio or not.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Conversation
          </h3>
          <p className="text-lg md:text-xl">
            Encourage behaviors like online purchases, registrations, and
            subscriptions.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Event Sales
          </h3>
          <p className="text-lg md:text-xl">
            Boost events and hospitality shopping.
          </p>
        </div>
      </div>
      <div className="md:w-1/3 md:ml-8 mt-8 md:mt-0">
        <div className="w-50">
          <Image
            src="/Images/trend.jpg"
            alt="graph"
            width={300}
            height={300}
            className="w-full h-auto transition duration-500 ease-in-out transform hover:scale-115"
          />
        </div>
      </div>
    </div>
  );
};

export default Solutionforall;
