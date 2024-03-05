import React, { useState } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";
import Certificates from "./Certificates";

const PDF_FILE_URL = "http://localhost:3000/Saranga_Siriwardhana_Resume.pdf";
const DRIVE_LINK ="https://drive.google.com/file/d/1ISD-1Pu4NI8YnLogC0cb1JSaNA9OsINC/view?usp=sharing";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  const [certificatetData, setCertificateData] = useState(false);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  const downloadFileAtUrl = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));

        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <section id='resume' className='w-full py-17 border-b-[1px] border-b-black'>
      <div className='flex justify-center items-center text-center py'>
        <Title des='My Resume' />
      </div>

      <div className='flex justify-center items-center text-center'>
        <motion.button
          variants={buttonVariants}
          whileHover='hover'
          className='bg-[#4433c7] text-white font-bold py-3 px-6 rounded-lg'
          onClick={() => {
            // Navigate to the desired link instead of downloading the file
            window.location.href = DRIVE_LINK; // PDF_FILE_URL;
          }}
        >
          Click Here To Download CV
        </motion.button>
      </div>

      <div>
        <ul className='mt-8 py-10 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false) &
              setCertificateData(false)
            }
            className={`${
              educationData
                ? "border-[#4433c7] rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setCertificateData(true)
            }
            className={`${
              certificatetData
                ? "border-[#4433c7] rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Certificates
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false) &
              setCertificateData(false)
            }
            className={`${
              skillData ? "border-[#4433c7] rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>

          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setCertificateData(false)
            }
            className={`${
              experienceData
                ? "border-[#4433c7] rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}

      {experienceData && <Experience />}
      {certificatetData && <Certificates />}
    </section>
  );
};

export default Resume;
