/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { RiUserFill, RiHeartFill, RiSearch2Fill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";

const DiscoverAudience = () => {
  return (
    <div className="container mx-auto px-4 lg:px-20 py-8 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
        <div className="text-center">
          <h1 className="pt-16 sm:pt-36 font-bold text-white text-5xl mb-4">
            Discover your ideal audience.
          </h1>
          <div className="text-white font-bold text-lg sm:text-xl mb-4">
            <div className="mb-8">
              Your adverts will be seen by the people you care about the most
              thanks to our precision targeting capabilities.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Automatic Aiming */}
          <div className="flex flex-col items-center gap-4 sm:w-1/2 md:w-auto">
            <div className="text-5xl text-white">
              <RiUserFill />
            </div>
            <div className="text-center">
              <h1 className="text-2xl text-white font-bold mb-4">
                Automatic Aiming
              </h1>
              <div className="text-white">
                Based on information from your Placio account, we'll choose your
                audience.
              </div>
            </div>
          </div>
          {/* Demographics */}
          <div className="flex flex-col items-center gap-4 sm:w-1/2 md:w-auto">
            <div className="text-5xl text-white">
              <BsGraphUpArrow />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">
                Demographics
              </h1>
              <div className="text-white">
                Using data on age, gender, region, and language, focus on the
                right audience.
              </div>
            </div>
          </div>
          {/* Interest */}
          <div className="flex flex-col items-center gap-4 sm:w-1/2 md:w-auto">
            <div className="text-5xl text-white">
              <RiHeartFill />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">Interest</h1>
              <div className="text-white">
                Reach out to people based on their interests, such as cooking or
                house design. People will see your adverts while they peruse
                their home feeds.
              </div>
            </div>
          </div>
          {/* Keywords */}
          <div className="flex flex-col items-center gap-4 sm:w-1/2 md:w-auto">
            <div className="text-5xl text-white">
              <RiSearch2Fill />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white mb-4">Keywords</h1>
              <div className="text-white">
                Use targeted search phrases to connect with those who are
                prepared to take action. Your advertisements will show up in
                related search
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverAudience;
