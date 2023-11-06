"use client";
/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout/layout";
import React from "react";
import Image from "next/image";
import SmallButton from "@/components/Buttons/smallButtons";
import AssistCustomer from "@/components/resourcesContent/AssistCustomer";
import ResourcesCard from "@/components/resourcesContent/ResourcesCard";
// import GetSupport from '@/components/resourcesContent/GetSupport';

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-44 md:mt-44 px-4">
        <div className="md:w-2/3 pr-8">
          <h1 className="text-5xl md:text-5xl font-bold mb-8 pl-8">
            Your company <br></br>
            has a place <br></br>
            on Placio.
          </h1>
          <div className="mb-8 pl-8">
            <div className="text-lg md:text-2xl mb-8 ">
              Regardless of the size of your company, this is where you will
              prosper. <br></br> Before your rivals do, locate your audience on
              Placio and motivate <br></br> them to make their next purchase. On
              Placio, you'll find solutions <br></br> that will support the
              expansion of your brand, whether you're trying <br></br> to sell
              more goods, expand your audience, or increase website traffic.
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

        <div className="md:w-1/3 md:ml-8 mt-8 md:mt-0">
          <div className="w-50">
            <Image
              src="/Images/Homepage/events.svg"
              alt="Picture"
              width={300}
              height={300}
              className="w-full h-auto object-left"
            />
          </div>
        </div>
      </div>
      <div>
        <AssistCustomer />
      </div>
      <div>
        <ResourcesCard />
      </div>
    </Layout>
  );
};

export default page;
