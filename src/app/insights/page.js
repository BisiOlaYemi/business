/* eslint-disable react/no-unescaped-entities */
import InsightCards from "@/components/HeroCards/insightCards";
import Methods from "@/components/insightsDetail/Methods";
import Slides from "@/components/insightsDetail/Slides";
import Layout from "@/components/Layout/layout";

import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center text-dark bg-lightPurple text-purpleBlood">
        <h3 className="pt-16 md:pt-40 font-bold text-white text-4xl md:text-7xl mb-8">
          The Motive, Insights for the future
        </h3>
        <div className="w-full px-4 md:w-2/3 md:px-0">
          <div className="text-white font-bold text-xl md:text-4xl flex flex-col items-center mt-6 md:mt-12 mb-16">
            <div className="text-center">
              This isn't another report on year-end trends. This study offers a
              glimpse into the future from the area where people go to plan it
              because it is not yet trendy.
            </div>
          </div>
        </div>
        <div className="mt-24">
          <Slides />
        </div>
        <div>
          <InsightCards />
        </div>
        <Methods />
      </div>
    </Layout>
  );
};

export default page;
