/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SuitableAudience = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="md:flex-1">
        <div className="grid place-items-center w-64 h-64 rounded-lg overflow-hidden">
          <Image
            src="/Images/r4.jpg"
            alt="Image card"
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
      </div>
      <div className="md:flex-1 p-6">
        <h1 className="font-bold text-5xl text-white mb-8">
          Suitable audience.<br></br>
          Right location.<br></br>
          Ideal moment.
        </h1>
        <div className="mb-8 text-2xl text-white">
          On Placio, you'll find your most ardent and devoted fans. Everybody
          enjoys trying new things, therefore Placio is appealing to everyone.
          All of the Gen Z students, millennial guys, and travel-obsessed
          retirees are looking for motivational, practical advice.
        </div>
        <Link
          href={"/#"}
          className="bg-white text-primary text-2xl font-bold py-2 px-4 rounded-full"
        >
          See Users Stats
        </Link>
      </div>
    </div>
  );
};

export default SuitableAudience;
