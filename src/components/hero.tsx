"use client";
import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";

import Typewriter from "typewriter-effect";
import Link from "next/link";

const Hero = () => {
  const animationData = require("../../public/assets/projects.json");

  const container = useRef(null);
  useEffect(() => {
    if (container.current) {
      lottie.destroy();
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }
  }, []);

  return (
    <section className="body-font bg-black text-white">
      <div className="container mx-auto flex md:px-3 py-24 md:py-28 md:flex-row flex-col-reverse  items-center">
        <div className=" animate pl-4 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h2 className="  title-font sm:text-4xl text-3xl mb-4 font-medium  text-slate-400">
            Hi, My name is
            <span className=" text-slate-300 font-bold"> Bushra</span>
          </h2>
          <h3 className=" title-font sm:text-4xl text-3xl mb-4 font-bold  text-slate-200">
            <span className="animate text-white"></span>
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Web Designer",
                  "Front-end Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>

          <div className=" w-[300px] h-[2px]  bg-white"></div>
          <p className="text-blue-900 text-small font-normal mt-2">
                Coding | Learnings | Lifestyle
              </p>
          <div className="flex ">

          <div className="flex justify-center px-4 py-1 rounded mr-4">
          <a 
  href="/my-resume.pdf" 
  download 
  className="button inline-flex text-slate-200 bg-blue-600 border-0 py-2 px-6 focus:outline-none rounded text-lg active:scale-[.97] hover:bg-white hover:text-gray-800"
  aria-label="Download my CV"
>
  <Typewriter
    options={{
      strings: ['Download CV'],
      autoStart: true,
      loop: true,
      wrapperClassName: 'download-cv',
    }}
  />
</a>

            <div className="flex justify-center px-4 py-1 rounded mr-4">
            <Link href={"https://www.linkedin.com/in/bushra-memon-40b8a02b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0F%2BpqnwNRb%2BEoHlIZuVl5g%3D%3D"}>
              <button className="button inline-flex text-slate-200 bg-blue-600 border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                Linkedin
              </button>
            </Link>
            

            </div>
          </div>
          </div>
          
        </div>

        <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-20  ">
          <div className="animation-container" ref={container}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
