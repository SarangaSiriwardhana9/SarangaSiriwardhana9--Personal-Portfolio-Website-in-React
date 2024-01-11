import React from "react";
import Title from "../layouts/Title";
import {
  codewave,
  keepIt,
  buildHub,
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  MrKing,
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
          title='CAFE-MR.KING - E-COMMERCE PLATFORM '
          des=' Presenting MR. KING CAFE: My MERN project exemplifying Full-Stack expertise. This platform boasts a user-friendly interface with React, Node.js, and MongoDB, enhanced by Tailwind CSS. Users can log in, explore menus, add to carts, and pay securely via Stripe. JWT ensures authentication, while an admin dashboard simplifies menu and user management.'
          src={MrKing}
          githubLink='https://github.com/SarangaSiriwardhana9/Cafe_MRKing'
        />
      <ProjectsCard
          title='Codewave - Interactive Programming Assistant Tool'
          des='Codewave is an interactive programming assistance tool designed to support first-year Information Technology students in their learning journey. It provides a dynamic virtual lab environment, automated guidelines, and real-time collaboration to empower students in navigating coding exercises at their own pace.'
          src={codewave}
          githubLink='https://github.com/SarangaSiriwardhana9/CodeWave'
        />

<ProjectsCard
          title='BuildHub - Procurement Management System for the Construction Industry'
          des='Here we addressing the challenges associated with procurement processes within the construction industry. To tackle these issues, we have developed a web application and a mobile app. My contribution is centered on the mobile application, which is created using technologies like React-Native, NodeJS, ExpressJS, and MongoDB'
          src={buildHub}
          githubLink='https://github.com/SarangaSiriwardhana9/KeepIt'
        />


<ProjectsCard
          title='KeepIt - Book Marketplace Mobile App'
          des='This mobile app project is designed to create a user-friendly and efficient platform for buying and selling books in a peer-to-peer (C2C) fashion. It offers a seamless experience for book enthusiasts who want to trade, purchase, or sell their pre-owned books'
          src={keepIt}
          githubLink='https://github.com/SarangaSiriwardhana9/KeepIt'
        />

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
       

  
      </div>
    </section>
  );
};

export default Projects;
