import React from "react";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubLink, websiteLink }) => {
  return (
    <a
      href={githubLink}
      target='_blank'
      rel='noopener noreferrer'
      className='w-full p-4 xl:px-2 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000'
    >
      <div className='w-full h-[250px] overflow-hidden rounded-lg mb-4'>
        <img
          className='w-full h-full object-cover group-hover:scale-110 duration-300 cursor-pointer'
          src={src}
          alt='Project Image'
        />
      </div>
      <div className='w-full flex flex-col gap-4'>
      <h3 className='text-lg font-semibold uppercase text-[#5045F9] mb-2'>
  {title}
</h3>

        <p className='text-sm tracking-wide text-gray-300'>{des}</p>
        <div className='flex items-center justify-between mt-1'>
          {/* Add this if you have a websiteLink */}
          {websiteLink && (
            <span className='text-lg w-10 h-5 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-[#4433c7] duration-300 cursor-pointer'>
              <a
                href={websiteLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGlobe />
              </a>
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

export default ProjectsCard;
