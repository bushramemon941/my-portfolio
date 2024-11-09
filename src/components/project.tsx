"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects">
      <section className="text-gray-600 body-font bg-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className=" text-4xl md:text-5xl font-medium title-font mb-4 text-white">
              My Projects
            </h1>
          </div>

          <div className="flex flex-wrap md:-m-4  ">
            {/* project1 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4   ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../public/imgs/fb.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 ">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Facebook Login Page
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3 ">
                    This  project created by  using
                    Html, Css, Javascript.
                    <br />
                    Here is the link of my project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/bushramemon941/facebook-singup-clone.git"}
                  >
                   <p className="p-1 mt-4 text-center border-2 border-gray-500 leading-relaxed  text-gray-800 font-bold hover:scale-105 duration-300 ease hover:bg-black  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project2 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../public/imgs/calculator.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Calculator
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3">
                    I have created a calculator project using Html, CSS,
                    typescript .  Here is the Link of my Project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/bushramemon941/simple-calculator.git"}
                  >
                     <p className="p-1 mt-4 text-center border-2 border-gray-500 leading-relaxed  text-gray-800 font-bold hover:scale-105 duration-300 ease hover:bg-black  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project3 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../public/imgs/library.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                Library website
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3">
                    This project created by Next.js
                    <br />
                    Here is the Link of my Project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://bushra-book-library-iev9.vercel.app/"}
                  >
                     <p className="p-1 mt-4 text-center border-2 border-gray-500 leading-relaxed  text-gray-800 font-bold hover:scale-105 duration-300 ease hover:bg-black  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project4 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../public/imgs/safari.jpg")}
                />
                <div className=" px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                   Safari Clone
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3 ">
                    A clone created by using html css Javascript
                    Here is the Link of my Project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/bushramemon941/safari-clone.git"}
                  >
                   <p className="p-1 mt-4 text-center border-2 border-gray-500 leading-relaxed  text-gray-800 font-bold hover:scale-105 duration-300 ease hover:bg-black  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project5 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../public/imgs/school.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Student Managment system
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3 ">
                    I have developed an ATM project using TypeScript and
                    Node.js. 
                    Here is the Link of my Project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://github.com/bushramemon941/student-managment-system.git"}
                  >
                     <p className="p-1 mt-4 text-center border-2 border-gray-500 leading-relaxed  text-gray-800 font-bold hover:scale-105 duration-300 ease hover:bg-black  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* project6 */}
            <div className="box lg:w-1/3 sm:w-1/2 p-4  ">
              <div className="flex relative cursor-pointer">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center "
                  src={require("../../public/imgs/shan.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full  border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="headings title-font text-lg font-medium text-gray-900 mb-3">
                    Shan-clone
                  </h1>
                  <p className=" font-serif  leading-relaxed line-clamp-3">
                    I have created a shan website using Html, CSS,
                    bootstraps so check it out and share Feedback. <br />
                    Here is the link of my Project.
                  </p>
                  <Link
                    target="_blank"
                    href={"https://web-assigment-a751f.web.app/"}
                  >
                    <p className="p-1 mt-4 text-center border-2 border-gray-500 leading-relaxed  text-gray-800 font-bold hover:scale-105 duration-300 ease hover:bg-black  hover:text-white rounded ">
                      Visit my Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;