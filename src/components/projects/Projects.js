import React, { useRef, useState } from "react";
import Title from "../layouts/Title";
import ProjectsCard from "./ProjectsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  codewave,
  keepIt,
  buildHub,
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  MrKing,
  StateLk,
  SriChat,
  Auth,
  note,
  realtalk
} from "../../assets/index";

SwiperCore.use([]);

const Projects = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black relative"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="" des="My Projects" />
      </div>
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={goPrev}
          className="bg-slate-200 text-slate-700 text-xl px-3 py-3  rounded-full   outline-black focus:outline-none"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
        <button
          onClick={goNext}
          className="bg-slate-100 text-slate-700 text-xl px-3 py-3  rounded-full  focus:outline-none"
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="px-4">
      <Swiper
        ref={swiperRef}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={handleSlideChange}
      >
       
        <SwiperSlide>
          <ProjectsCard
            title="CAFE-MR.KING - E-COMMERCE PLATFORM "
            des=" Presenting MR. KING CAFE: My MERN project exemplifying Full-Stack expertise. This platform boasts a user-friendly interface with React, Node.js, and MongoDB, enhanced by Tailwind CSS. Users can log in, explore menus, add to carts, and pay securely via Stripe. JWT ensures authentication, while an admin dashboard simplifies menu and user management."
            src={MrKing}
            githubLink="https://github.com/SarangaSiriwardhana9/Cafe_MRKing"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="Codewave - Interactive Programming Assistant Tool"
            des="Codewave is an interactive programming assistance tool designed to support first-year Information Technology students in their learning journey. It provides a dynamic virtual lab environment, automated guidelines, and real-time collaboration to empower students in navigating coding exercises at their own pace."
            src={codewave}
            githubLink="https://github.com/SarangaSiriwardhana9/CodeWave"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="StateLk - Real Estate Platform"
            des="StateLk is a comprehensive real estate platform designed for the Sri Lankan market. It offers a user-friendly interface for buying and selling homes and lands. Users can easily add property listings, view property details, and contact sellers. The platform aims to simplify the property search process and enhance the overall experience for both buyers and sellers in Sri Lanka."
            src={StateLk}
            githubLink="https://github.com/SarangaSiriwardhana9/StateLK--MERN_Full_Stack_Estate_Marketplace"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="KeepIt - Book Marketplace Mobile App"
            des="This mobile app project is designed to create a user-friendly and efficient platform for buying and selling books in a peer-to-peer (C2C) fashion. It offers a seamless experience for book enthusiasts who want to trade, purchase, or sell their pre-owned books."
            src={keepIt}
            githubLink="https://github.com/SarangaSiriwardhana9/KeepIt"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectsCard
            title="Real Talk - Real Time Chat App"
            des="Real Talk is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to sign up, sign in, and chat with other users in real time. The app utilizes Vite as a build tool, Socket.IO for real-time communication, Daisy UI for styling, JWT for authentication, and Tailwind CSS for UI components. The app is deployed on Render."
            src={realtalk}
            githubLink="https://github.com/SarangaSiriwardhana9/RealTalk-Real-Time-Chat-App"
          />
        </SwiperSlide>

        <SwiperSlide>
          <ProjectsCard
            title="Idea Vault - notes keeping web application"
            des="Idea Vault is a note-keeping web application designed to help users organize their thoughts, ideas, and tasks. Users can create, update, and delete notes, as well as pin notes for easy access and search for notes. The application provides a user-friendly interface and is built with Vite, Node.js, Express, MongoDB, and Firebase for authentication and image storage. "
            src={note}
            githubLink="https://github.com/SarangaSiriwardhana9/IdeaVault-MERN_Full_Stack_Notes_APP?tab=readme-ov-file"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="SriChat - Next.js ChatGPT Clone"
            des="SriChat is a clone of the ChatGPT application built using Next.js. It leverages Firebase for real-time chat functionality and integrates the OpenAI API for natural language processing. SriChat provides users with a seamless chat experience, enabling them to communicate effectively in real-time. The project showcases the use of modern web technologies to create a responsive and interactive chat application."
            src={SriChat}
            githubLink="https://github.com/SarangaSiriwardhana9/SriChat-ChatGtp-clone"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="BuildHub - Procurement Management System"
            des="Here we addressing the challenges associated with procurement processes within the construction industry. To tackle these issues, we have developed a web application and a mobile app. My contribution is centered on the mobile application, which is created using technologies like React-Native, NodeJS, ExpressJS, and MongoDB"
            src={buildHub}
            githubLink="https://github.com/SarangaSiriwardhana9/-Procurement-for-Construction-Industry-"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="Restaurant Management System"
            des=" Restaurant Management System Using MERN Stack,this project involves developing a computerized system for Nugasewana restaurant that can streamline its operations, automate processes, and provide a better experience for customers and employees with a propper UI."
            src={projectOne}
            githubLink="https://github.com/SarangaSiriwardhana9/Mern-Stack-Restaurant-Management-System-Using"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="Full-Stack-MERN-Auth-project"
            des=" MERN Auth is a lightweight full-stack web application with user authentication, protected routes, and image uploads. Built using MongoDB, Express.js, React, and Node.js, it offers a simple yet powerful solution for implementing authentication in your projects."
            src={Auth}
            githubLink="https://github.com/SarangaSiriwardhana9/Full-Stack-MERN-Auth-project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsCard
            title="Student Management System"
            des=" Excited to share my capstone project as part of the Trainee Full-Stack Developer Programme offered by the UOM . This project focuses on developing an efficient information management system for a school. Leveraging cutting-edge technologies, I utilized Angular for the frontend, and for the backend."
            src={projectThree}
            githubLink="https://github.com/SarangaSiriwardhana9/UOM-Capstone-Project---Trainee-Full-Stack-Developer-Program"
          />
        </SwiperSlide>
      </Swiper>
      
      <div className="flex justify-center mt-4">
        {[...Array(10).keys()].map((index) => (
          <button
            key={index}
            onClick={() => {
              if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.slideTo(index);
              }
            }}
            className={`w-4 h-4 mx-1 rounded-full focus:outline-none ${
              activeIndex === index ? "bg-[#37373a]" : "bg-[#141313]"
            }`}
          ></button>
        ))}
        </div>
     
        </div>
    </section>
    
  );
};

export default Projects;

