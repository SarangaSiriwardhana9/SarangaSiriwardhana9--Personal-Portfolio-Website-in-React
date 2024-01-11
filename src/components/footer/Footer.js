import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { logo } from "../../assets/index";

const Footer = () => {
  return (
    <div className='w-full py-20 bg-black flex flex-col md:flex-row justify-center items-center'>
      <div className=' md:gap-8'>
        <div className='w-40 mx-auto'>
          <img className='w-full' src={logo} alt='logo' />
        </div>
        <div className='flex gap-4 mt-10'>
          <span className='bannerIcon'>
            <a
              href='https://github.com/SarangaSiriwardhana9'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiGithub />
            </a>
          </span>
          <span className='bannerIcon'>
            <a href='mailto:lasindusaranga99@gmail.com'>
              <SiGmail />
            </a>
          </span>
          <span className='bannerIcon'>
            <a
              href='https://www.linkedin.com/in/saranga-siriwardhana-409494218/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedinIn />
            </a>
          </span>

          <span className='bannerIcon'>
            <a
              href='https://instagram.com/_.l_sara_?igshid=NTc4MTIwNjQ2YQ=='
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram />
            </a>
          </span>

          <span className='bannerIcon'>
            <a
              href='https://www.facebook.com/saranga.siriwardana.1?mibextid=LQQJ4d'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
