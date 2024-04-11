import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
const Banner = () => {
  return (
    // Banner
    <section
      id='home'
      className='w-full pt-10 pb-10 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black'
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
