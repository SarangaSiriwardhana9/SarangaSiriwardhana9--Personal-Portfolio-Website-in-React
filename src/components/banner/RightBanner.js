import React from "react";
import { bannerImg, logo } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className='w-full lgl:w-1/2 flex justify-center items-center relative'>
      <img
        className=' w-[400px] h-[400px] lgl:w-[420px] lgl:h-[420px] z-10  transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-10'
        src={bannerImg}
        alt='bannerImg'
        style={{
          marginLeft: "40px",
          marginTop: "-20px",
          border: "4px solid white",
          borderRadius: "50%",
        }}
      />
      {/* Remove the div element with the "bg-gradient-to-r" class */}
    </div>
  );
};

export default RightBanner;
