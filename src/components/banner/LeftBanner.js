import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Engineering Undergraduate.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
    
  });
  return (
    <div className='w-full lgl:w-3/4 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <h4 className=' text-lg font-normal'>
          Welcome to my portfolio.......! 👀🙋‍♂️{" "}
        </h4>
        <h1
          className='text-7xl font-bold text-white'
          style={{ fontFamily: "GeezaPro-Bold" }}
        >
          Hi, I'm{" "}
          <span className='text-[#191a5e] capitalize'>
            Saranga Siriwardhana
          </span>
        </h1>
        <h2 className='text-3xl font-bold text-#4f53df '>
          A <span>{text}</span>
          <Cursor
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#52619D'
          />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
          I am a BSc (Hons) Software Engineering student at the Sri Lanka
          Institute of Information Technology(SLIIT), with a passion for
          software engineering and a strong background in coding. My expertise
          lies in Java and Python programming languages, as well as web
          development. I am well-versed in various software development
          methodologies and eager to collaborate with dynamic teams on
          meaningful projects. My goal is to develop innovative solutions that
          address real-world problems, and I am constantly learning and
          improving my skills to achieve this.<br></br> Thank you for taking the
          time to learn more about me. I look forward to the opportunity to work
          with you.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
