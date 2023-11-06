/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const EarnMoney = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:flex-1">
        <div className="grid place-items-center w-68 h-full rounded-lg overflow-hidden pl-8">
          <Image
            src="/Images/Homepage/events.svg"
            alt="Image card"
            width={300}
            height={300}
            layout="responsive"
            className="transition duration-500 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>
      <div className="md:flex-1 p-6">
        <h1 className="font-bold text-5xl text-white mb-8">
          Collaborate with<br></br>
          Brands
        </h1>
        <div className="mb-8 text-2xl text-white">
          Use the paid partnership tool to identify brand partners. Simply
          create an Idea Space for yourself in the app, identify your partner
          brand, and add the paid partnership label. As soon as they grant the
          request, their logo will show up on your notification. Additionally,
          brands may decide to advertise your concepts, broadening your audience
          even further. Using the paid partnership feature allows you to discuss
          payment terms and procedures with the business directly. Payment will
          not be handled directly by Placio.
        </div>
        <Link
          href={"/#"}
          className="bg-white text-primary text-2xl font-bold py-2 px-4 rounded-full"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default EarnMoney;
