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
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <h4 className=' text-lg font-normal'>Heyy....... 👀🙋‍♂️ </h4>
        <h1
          className='text-7xl font-bold text-white'
          style={{ fontFamily: "GeezaPro-Bold" }}
        >
          Hi, I'm{" "}
          <span className='text-[#191a5e] capitalize'>
            Saranga Siriwardhana
          </span>
        </h1>
        <h2 className='text-3xl font-bold text-#4f53df'>
          A <span>{text}</span>
          <Cursor
            cursorBlinking='false'
            cursorStyle='|'
            cursorColor='#52619D'
          />
        </h2>
        <p className='text-base font-bodyFont leading-6 tracking-wide'>
          "As a BSc(Hons) Software Engineering student at the Sri Lankan
          Institute of Information Technology (SLIIT), I am passionate about
          software engineering. My expertise lies in Java and Python coding,
          complemented by a solid understanding of software development
          methodologies. Eager to contribute to meaningful projects with a
          dynamic team, I am constantly seeking opportunities to learn and
          innovate in the field."
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
