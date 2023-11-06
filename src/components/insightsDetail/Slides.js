/* eslint-disable react/no-unescaped-entities */
import React from "react";
import InsightSlide1 from "../Sliders/insightSlide1";
import InsightSlide2 from "../Sliders/insightSlide2";

const Slides = () => {
  return (
    <section>
      <div className="w-screen h-screen grid grid-rows-2 text-white text-2xl md:grid-cols-2 mt-12">
        <div className="w-full h-full md:h-screen">
          <InsightSlide1 />
        </div>

        {/*Page 2*/}
        <div className=" w-full h-full md:h-screen">
          <InsightSlide2 />
        </div>
      </div>
    </section>
  );
};

export default Slides;
