"use client";
/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout/layout";
import React from "react";
import Image from "next/image";
import SmallButton from "@/components/Buttons/smallButtons";
import EarnMoney from "@/components/gettingstarted/EarnMoney";
import Creators from "@/components/gettingstarted/Creators";

const Page = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-44 md:mt-44 px-4">
        <div className="md:w-2/3 pr-8">
          <h1 className="text-7xl md:text-5xl font-bold mb-8 pl-8">
            Earn Money <br></br>
            Using Placio <br></br>
          </h1>
          <div className="mb-8 pl-8">
            <div className="text-lg md:text-4xl mb-8 ">
              Referrals are being rewarded differently by us,<br></br> with the
              goal of creating a community around <br></br>common interests.
              Also, we're improving the clarity <br></br> and transparency of
              the ways you can monetize your <br></br> materials so that
              everyone can comprehend how to<br></br>
              profit from Placio. With the Placio app's creator center,<br></br>{" "}
              you can find all the resources you need to get going.
            </div>
            <SmallButton
              className=""
              name={"Download"}
              bgColor={"primary"}
              borderColor={"white"}
              textColor={"white"}
              action={() => router.push("/auth/signup")}
            />
          </div>
        </div>

        <div className="md:w-1/3 md:ml-8 mt-8 md:mt-0">
          <div className="w-50">
            <Image
              src="/Images/Homepage/appMockup.svg"
              alt="Picture"
              width={300}
              height={300}
              className="w-full h-auto object-left"
            />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <EarnMoney />
      </div>
      <div className="mt-24">
        <Creators />
      </div>
    </Layout>
  );
};

export default Page;
