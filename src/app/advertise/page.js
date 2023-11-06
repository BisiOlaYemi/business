"use client";
/* eslint-disable react/no-unescaped-entities */
import Layout from "@/components/Layout/layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DiscoverAudience from "@/components/advertsContent/DiscoverAudience";
import Aimhigh from "@/components/advertsContent/Aimhigh";
import Solutionforall from "@/components/advertsContent/Solutionforall";

const Page = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-center mt-44">
        <div className="md:flex-1">
          <div className="grid place-items-center w-64 h-full rounded-lg overflow-hidden transition duration-500 ease-in-out transform hover:scale-105">
            <Image
              src="/Images/Homepage/ed16.jpg"
              alt="Image card"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
        </div>
        <div className="md:flex-1 p-6">
          <h1 className="font-bold text-5xl text-white mb-8">
            End your interjections.<br></br>
            Commence motivating. <br></br>
            Make difference.
          </h1>
          <div className="mb-8 text-2xl text-white">
            You select the budget and duration of your advertising campaigns.
            You have the option to set your own bids or have our automatic
            bidding tools handle it for you, depending on the type of campaign
            you are running.
          </div>
          <Link
            href={"https://www.google.com"}
            className="bg-white text-primary text-2xl py-2 px-4 rounded-full transition duration-300 hover:bg-indigo-500"
          >
            Create Account
          </Link>
        </div>
      </div>
      <div>
        <Solutionforall />
      </div>
      <div>
        <DiscoverAudience />
      </div>
      <div>
        <Aimhigh />
      </div>
    </Layout>
  );
};

export default Page;
