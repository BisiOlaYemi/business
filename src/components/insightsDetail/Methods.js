/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Methods = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-24">
      <h1 className="font-bold text-white text-5xl mb-8">Procedures</h1>
      <div className="text-white text-2xl mb-4">
        The art and science of trend prediction go hand in hand. Discover our
        methodology and how Placio trends can expand your company by exploring
        the information below.
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-4 text-center">
        <div className="rounded-lg p-4 md:w-1/2">
          <Image
            src="/Images/Homepage/ec5.jpg"
            alt="journey"
            width={800}
            height={800}
            className="rounded-lg mb-4 w-full"
          />
          <div className="text-white text-2xl mb-4">How we forecast trends</div>
          <Link href={"/#"} className="text-white text-xl hover:text-blue-700">
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
          <div className="text-white text-2xl mb-4">Placio trends matter</div>
          <Link href={"/#"} className="text-white text-xl hover:text-blue-700">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Methods;
