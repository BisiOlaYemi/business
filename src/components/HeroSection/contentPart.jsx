"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SmallButton from "../Buttons/smallButtons";

const contentPart = () => {
  return (
    <div className="bg-amber-100 flex flex-col items-center justify-center h-screen text-center ">
      <h3 className="pt-16 sm:pt-36 font-bold text-primary text-5xl mb-4">
        More than likes, actions speak.
      </h3>
      <div className="px-4 sm:px-0 max-w-lg mx-auto">
        <div className="text-primary font-bold text-lg sm:text-2xl  mt-4 mb-4">
          Put vanity metrics to rest. People on Placio are truly interested in
          trying your ideas or visiting your store. Compared to other platforms,
          it offers a deeper, more meaningful level of engagement. Get your best
          audience ever by getting in front of the 450 million monthly users of
          Placio.
        </div>
        <SmallButton
          className=""
          name={"Click here"}
          bgColor={"primary"}
          borderColor={"white"}
          textColor={"white"}
          action={() => router.push("/auth/signup")}
        />
      </div>
    </div>
  );
};

export default contentPart;
