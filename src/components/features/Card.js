import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className='w-full px-4 md:px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center mb-4 md:mb-0 bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group'>
      <div className='h-62 overflow-y-hidden'>
        <div className='flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-5 transition-transform duration-500'>
          <div className='w-10 h-2 flex flex-col justify-between mt-2'>
            {icon ? (
              <span className='text-5xl text-[#4433c7]'>{icon}</span>
            ) : (
              <>
                <span className='w-full h-[2px] rounded-lg bg-[#4433c7] inline-flex'></span>
                <span className='w-full h-[2px] rounded-lg bg-[#4433c7] inline-flex'></span>
                <span className='w-full h-[2px] rounded-lg bg-[#4433c7] inline-flex'></span>
                <span className='w-full h-[2px] rounded-lg bg-[#4433c7] inline-flex'></span>
              </>
            )}
          </div>
          <div className='flex flex-col gap-4'>
            <h2 className='text-xl md:text-2xl font-titleFont font-bold text-gray-300'>
              {title}
            </h2>
            <p className='base'>{des}</p>
            <span className='text-2xl text-[#4433c7]'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;


