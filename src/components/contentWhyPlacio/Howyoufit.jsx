/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const HowyouFit = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-screen text-center mt-44">
      <h3 className="pt-16 sm:pt-36 font-bold text-white text-5xl mb-4">
        How you fit in
      </h3>
      <div className="text-white text-center font-bold text-lg sm:text-xl  mt-4 mb-4">
        <div>
          People are eagerly interested in hearing from you since they are here
          to learn about fresh concepts and goods. It turns into significant
          outcomes and solid connections with your target market. Create a free
          business account to get started. You'll receive additional tools like
          analytics, advertisements, and unique Placio layouts, all of which are
          intended to help you achieve your objectives.
        </div>
        <Link
          href={"/#"}
          className="bg-white text-primary text-xl font-bold py-2 px-4 rounded-full mt-24"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default HowyouFit;
