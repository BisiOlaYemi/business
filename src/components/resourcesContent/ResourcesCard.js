"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import SmallButton from "../Buttons/smallButtons";

const ResourcesCard = () => {
  return (
    <section className="h-screen md:h-auto">
      <div className="w-screen md:w-full h-1/2 md:h-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center w-full h-full bg-slate-900">
          <h1 className="font-bold text-5xl text-white mb-8 text-center">
            Placio provide <br></br> services for <br></br> many companies.
          </h1>
          <div className="text-white text-xl mt-12 flex items-center justify-center text-center mb-8">
            With our adaptable ad formats and extensive campaign options,{" "}
            <br></br>
            you can forge your own route to success. <br></br> It was successful
            for all brands, including a modern hospitality <br></br>company that
            aimed to connect with event-conscious consumers. <br></br>{" "}
            advertising were sent 7 times more frequently than in earlier
            campaigns, <br></br> demonstrating that Placio is a full-funnel
            solution that works.
          </div>
          <SmallButton
            className=""
            name={"Register"}
            bgColor={"primary"}
            borderColor={"white"}
            textColor={"white"}
            action={() => router.push("/auth/signup")}
          />
        </div>

        <div className="flex justify-center items-center w-full h-full">
          <Image
            src="/Images/Homepage/5.svg"
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

export default ResourcesCard;
