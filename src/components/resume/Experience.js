import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='py-12 font-titleFont flex flex-col gap-10 md:flex-row'
    >
      <div>
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-[#4433c7] tracking-[4px]'>
            2023 - Present
          </p>
          <h2 className='text-4xl font-bold'>Will update this section soon</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title=''
            subTitle=''
            result=''
            des='As a passionate and ambitious third-year undergraduate pursuing my studies, I am actively seeking opportunities to gain practical experience and enhance my skills in the field. Although my Job Experience section may currently be under development, I am eagerly looking forward to embarking on an exciting journey of professional growth through internships and hands-on projects. I am ready to bring my dedication, adaptability, and strong academic foundation to contribute effectively to any team. Stay tuned for updates as I explore new avenues to apply my knowledge and grow as a future professional.'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
