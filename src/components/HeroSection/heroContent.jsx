"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SmallButton from "../Buttons/smallButtons";

const heroContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-dark bg-lightPurple text-purpleBlood">
      <h3 className="pt-16 md:pt-40 font-bold text-white text-4xl md:text-7xl mb-8">
        Here, things are unique.
      </h3>
      <div className="w-full px-4 md:w-2/3 md:px-0">
        <div className="text-white font-bold text-xl md:text-4xl flex flex-col items-center mt-6 md:mt-12 mb-16">
          <div className="text-center">
            On Placio, people feel free to experiment and attempt new things.
            They are seeking motivation, and looking to connect with businesses.
            You'll need a Placio business account to get going. You may get
            unique content formats, tailored analytics, and more by signing up
            for free.
          </div>
        </div>
        <SmallButton
          name={"Register"}
          bgColor={"primary"}
          borderColor={"white"}
          textColor={"white"}
          action={"https://www.placio.io/auth/signup"}
        />
      </div>
    </div>
  );
};

export default heroContent;
