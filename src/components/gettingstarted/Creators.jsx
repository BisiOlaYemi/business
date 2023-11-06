/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Creators = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-white text-5xl mb-8">
          Boost interaction from your website
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-4 text-center">
          <div className="rounded-lg p-4 md:w-1/2">
            <Image
              src="/Images/Homepage/ec5.jpg"
              alt="journey"
              width={800}
              height={800}
              className="rounded-lg mb-4 w-full transition duration-500 ease-in-out transform hover:scale-115"
            />
            <div className="text-white text-2xl mb-4">
              By getting a Placio API on your website, you can make sure that
              your company name shows on every Placio ads that will refer users
              directly your website.
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
              className="rounded-lg mb-4 w-full transition duration-500 ease-in-out transform hover:scale-115"
            />
            <div className="text-white text-2xl mb-4">
              Without ever leaving your website, the follow widget enables site
              visitors to follow you on Placio. Also, we provide widgets that
              let users to store data or boards right on your website.
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
              className="rounded-lg mb-4 w-full transition duration-500 ease-in-out transform hover:scale-105"
            />
            <div className="text-white text-2xl mb-4">
              Rich Placio will automatically update your Account tag with data
              from your website. They assist you in immediately adding more
              information to the board so that others may learn more about your
              goods or concepts.
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

export default Creators;
