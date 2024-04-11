import React from "react";

const Title = ({ title, des }) => {
  return (
    <div className='flex flex-col gap-4 font-titleFont mb-14'>
      <h3 className='text-sm uppercase  font-bold text-[#4433c7] tracking-wide'>
        {title}
      </h3>
      <h1 className='text-5xl md:text-5xl text-gray-300 font-bold capitalize 'style={{ fontFamily: "GeezaPro-Bold" }}>
        {des}
      </h1>
    </div>
  );
};

export default Title;
