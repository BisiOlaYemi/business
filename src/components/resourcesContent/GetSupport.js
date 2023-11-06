/* eslint-disable react/no-unescaped-entities */
import React from "react";

const GetSupport = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
      <h1 className="font-bold text-white text-5xl mb-8">
        With Placio insights, advance your business targets
      </h1>
      <div className="flex flex-col items-center text-center md:text-left">
        <div className="mb-4">
          <h3 className="text-xl font-bold">Email that you’ll want to open</h3>
          <p>
            Join our email list and be the first to hear about
            <br></br> new products, fresh trends and so much more.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center text-center md:text-left">
        <div className="mb-4">
          <h3 className="text-xl font-bold">
            Apply for a free ads consultation
          </h3>
          <p>
            New to Placio ads? You may be eligible for a free, <br></br>
            personalised consultation with our in-house experts.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetSupport;
