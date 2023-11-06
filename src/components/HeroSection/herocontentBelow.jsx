"use client";
import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Content = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-primary mb-8 text-center md:text-left">
        Create your goals in style
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:justify-between w-full px-8">
        <div className="max-w-md py-8 text-center md:text-left">
          <div className="text-primary text-2xl mb-4">
            Create a network of like-minded individuals and earn money doing
            what you love. Placio content never expires, so over time, you'll
            continue to reach new audiences.
          </div>
          <Link href={"/#"} className="text-blue-500  hover:text-blue-700">
            Examine the tools of the Creator
          </Link>
        </div>
        <div className="max-w-md py-8 text-center md:text-left">
          <div className="text-primary text-2xl mb-4">
            Consumers using Placio spend two times as much each month as those
            using other services. Target customers who are prepared to book
            event and make purchase, use Placio catalogs and shopping ads to
            leverage forward.
          </div>

          <Link href={"/#"} className="text-blue-500 hover:text-blue-700">
            View available shopping options
          </Link>
        </div>
        <div className="max-w-md py-8 text-center md:text-left">
          <div className="text-primary text-2xl mb-4">
            For marketing objectives including awareness, consideration, and
            conversions, use Placio Ads. To build profitable campaigns, combine
            adaptable formats with specific targeting.
          </div>
          <Link href={"/#"} className="text-blue-500 hover:text-blue-700">
            Discover more about adverts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
