import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id='projects'
      className='w-full py-20 border-b-[1px] border-b-black'
    >
      <div className='flex justify-center items-center text-center '>
        <Title title='' des='My Projects' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectsCard
          title='Restaurant Management System'
          des=' Restaurant Management System Using MERN Stack,this project involves developing a computerized system for Nugasewana restaurant that can streamline its operations, automate processes, and provide a better experience for customers and employees with a propper UI.'
          src={projectOne}
          githubLink='https://github.com/SarangaSiriwardhana9/Mern-Stack-Restaurant-Management-System-Using'
        />

        <ProjectsCard
          title='Student Management System'
          des=' Excited to share my capstone project as part of the Trainee Full-Stack Developer Programme offered by the UOM . This project focuses on developing an efficient information management system for a school. Leveraging cutting-edge technologies, I utilized Angular for the frontend, and for the backend.                          '
          src={projectThree}
          githubLink='https://github.com/SarangaSiriwardhana9/UOM-Capstone-Project---Trainee-Full-Stack-Developer-Program'
        />
        <ProjectsCard
          title='Personal Portfolio'
          des=' My portfolio website has been professionally designed to offer an engaging and visually compelling user experience. Built using the latest technologies such as ReactJS, Tailwind CSS, Framer-Motion, React-Slick, and React-Scroll, the website showcases my skills and achievements, intuitive navigation, and engaging animations.'
          src={projectFour}
          githubLink='https://github.com/SarangaSiriwardhana9/SarangaSiriwardhana9--Personal-Portfolio-Website-in-React'
        />

        <ProjectsCard
          title='Hotel Booking System    '
          des=' Hotel App is a full-stack application built using the MERN stack technology. It provides a seamless user experience for hotel booking and management. The app allows users to browse and search for hotels, view detailed information about each hotel, make reservations, and manage their bookings through a attractive UI.'
          src={projectTwo}
          githubLink='https://github.com/SarangaSiriwardhana9/MERN-Stack-Project-Hotel-Booking-System'
        />
      </div>
    </section>
  );
};

export default Projects;
