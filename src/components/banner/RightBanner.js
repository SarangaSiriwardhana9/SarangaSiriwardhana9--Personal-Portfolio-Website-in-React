import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
      <img
        className='border-8 w-[200px] h-[200px] lgl:w-[400px] lgl:h-[480px] z-10 border-2 border-[#c2c5d2] transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-10'
        src={bannerImg}
        alt='bannerImg'
        style={{ marginLeft: "30px" }}
      />
      {/* Remove the div element with the "bg-gradient-to-r" class */}
    </div>
  );
};

export default RightBanner;
