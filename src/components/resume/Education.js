import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
    >
      {/* part one */}
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-[#4433c7] tracking-[4px]'>2016 - 2023</p>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Educational Qualification
          </h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title="Bachelor's degree"
            subTitle='SriLanka Institute of Information Technology'
            des="Currently reading for my Bachelors' Degree in Software Engineering (Bsc.(Hons) Information Technology Specialization in Software Engineering) at SriLanka Institute of Information Technology (SLIIT)"
          />
          <ResumeCard
            title='Advanced Level'
            subTitle='Wadduwa Central College (2017 - 2020) '
            des={`Passed General Certificate Advanced Level Exam in Technology Stream.\n Z-core - 1.1496 \n\n Science For Technology - B \n Bio System Technology - B \n Information And Communication Technology - C`}
          />
          <ResumeCard
            title='Ordinary Level'
            subTitle='Tissa Central College/Kaluthara'
            des='Passed General Certificate Ordinary Level Exam'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
