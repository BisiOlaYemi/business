/* eslint-disable react/no-unescaped-entities */
import React from "react";
import LayoutSliders from "./Sliders/LayoutSliders";
import SecttwoSlides from "./Sliders/SectwoSlides";

const Sectionslider = () => {
  return (
    <section>
      <div className="w-screen h-screen grid grid-rows-2 text-white text-2xl md:grid-cols-2 mt-12">
        <div className="w-full h-full md:h-screen">
          <LayoutSliders />
        </div>

        {/*Page 2*/}
        <div className=" w-full h-full md:h-screen">
          <SecttwoSlides />
        </div>
      </div>
    </section>
  );
};

export default Sectionslider;
