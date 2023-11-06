/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const Sectionslider = () => {
  return (
    <section className="h-screen md:h-auto">
      <div className="w-screen md:w-full h-1/2 md:h-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center w-full h-full bg-amber-700">
          <Image
            src="/Images/Homepage/events.svg"
            alt="Username"
            width={100}
            height={100}
            className="w-full h-full object-center"
          />
        </div>

        <div className="flex justify-center items-center w-full h-full">
          <Image
            src="/Images/Homepage/auth3.svg"
            alt="Username"
            width={100}
            height={100}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Sectionslider;
