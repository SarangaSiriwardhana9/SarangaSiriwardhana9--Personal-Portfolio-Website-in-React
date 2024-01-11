import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='py-6 font-titleFont flex flex-col gap-20 md:flex-row'
    >
      <div className='flex-1'>
        <div className='py-6 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-[#4433c7] tracking-[4px]'>
            2020 - Present
          </p>
          <h2 className='text-4xl font-bold'>Accomplishments</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='"Trainee- Full Stack Developer" programme'
            subTitle='conducted by Department of Information technology , University of Moratuwa'
            des='The program comprises six comprehensive courses, encompassing the following subjects: Web Designing, Frontend JavaScript, jQuery, Bootstrap, Server-side Web Programming, and Professional Skill Development.'
          />
          <ResumeCard
            title='Android Application Development'
            subTitle='conducted by Great Learning Academy'
            des='This Android app development course stands as a good guide for beginners strengthening your basics in Android application development and is a good mixture of theory and practical knowledge. '
          />
          <ResumeCard
            title='Introduction to Artificial Intelligence'
            subTitle='offered by Great Learning Academy'
            des='This course will help you understand the basics of Artificial Intelligence, Neural networks, and Computer Vision with use cases.'
          />
        </div>
      </div>
      <div className='flex-1'>
        <div className='py-6 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-[#4433c7] tracking-[4px]'>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </p>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Java Algorithms'
            subTitle='5th NELTAS ECAT GRAND FINALE (2015 - 2016)'
            result='80.5%'
            des=' This course covered the principles and implementation of algorithms based on Binary Search, Quick Sort, and Greedy Algorithms, along with their analysis and properties. '
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;
