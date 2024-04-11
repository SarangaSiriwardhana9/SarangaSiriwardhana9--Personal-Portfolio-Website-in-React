import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

function App() {
  return (
    <div className='w-full h-auto bg-black  text-lightText px-2'>
      {/* 
        The 'md:px-8' and 'lg:px-16' classes add left and right padding
        only on medium and large screens, respectively. 
        You can adjust the values based on your design needs.
      */}
      <Navbar />
      <div className='max-w-screen-xl mx-auto  px-3 md:px-8 lg:px-10'>
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
