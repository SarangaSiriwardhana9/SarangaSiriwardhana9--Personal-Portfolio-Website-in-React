import React from "react";
import { FaGlobe, FaGithub } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, websiteLink }) => {
  return (
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      <div className={`project-card rounded-2xl bg-gradient-to-r from-[#0f0f0f] to-[#242425] shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg`}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img
            src={src}
            alt="Project Image"
            className="w-full h-48 object-cover rounded-t-xl"
          />
        </a>
        <div className="p-4">
          <h3 className="text-[#8484ff] text-xl h-16">{title}</h3>
          <p className="text-slate-400 h-72  md:h-52">{des}</p>
          <div className="flex items-center">
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 flex items-center text-blue-500 hover:text-blue-700"
              >
                <FaGlobe className="mr-1" /> Visit Website
              </a>
            )}
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="ml-auto">
              <FaGithub className="text-xl hover:text-gray-200 transition duration-300 ease-in-out transform hover:scale-110" /> {/* Added GitHub icon with hover effect */}
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectsCard;
