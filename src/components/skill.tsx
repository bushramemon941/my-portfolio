"use client";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import Image from "next/image";

const Skill = () => {
  return (
    <div id="skills" className="bg-black">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="  sm:text-5xl text-3xl font-medium title-font text-white">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* skills */}

            <div className="p-5 md:p-4 w-[100%] md:w-1/3">
              <div className="shadow flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <Image
                      src={require("../../public/imgs/html.png")}
                      alt={"html-logo"}
                    ></Image>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="absolute bg-red-500 h-1 w-[100%] rounded-xl"></div>
                  </div>
                  <p className="text-right font-bold text-blue-500">100%</p>
                </div>
              </div>
            </div>

            {/* skills */}
            <div className="p-5 md:p-4 w-[100%] md:w-1/3">
              <div className="shadow flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <Image
                      src={require("../../public/imgs/css.png")}
                      alt={"ss-logo"}
                    ></Image>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="absolute bg-gray-500 h-1 w-[85%] rounded-xl"></div>
                  </div>
                  <p className="text-right font-bold text-blue-500">85%</p>
                </div>
              </div>
            </div>
            {/* skills */}

            <div className="p-5 md:p-4 w-[100%] md:w-1/3">
              <div className="shadow flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <Image
                      src={require("../../public/imgs/javascript.png")}
                      alt={"javascript-logo"}
                    ></Image>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JavaScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="absolute bg-yellow-500 h-1 w-[80%] rounded-xl"></div>
                  </div>
                  <p className="text-right font-bold text-blue-500">80%</p>
                </div>
              </div>
            </div>
            {/* skills */}

            <div className="p-5 md:p-4 w-[100%] md:w-1/3">
              <div className="shadow flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <Image
                      src={require("../../public/imgs/ts.png")}
                      alt={"typescript-logo"}
                    ></Image>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TypeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="absolute bg-blue-600 h-1 w-[85%] rounded-xl"></div>
                  </div>
                  <p className="text-right font-bold text-blue-500">85%</p>
                </div>
              </div>
            </div>
            {/* skills */}

            <div className="p-5 md:p-4 w-[100%] md:w-1/3">
              <div className="shadow flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <Image
                      src={require("../../public/imgs/react.png")}
                      alt={"react-logo"}
                    ></Image>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    React
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="absolute bg-sky-400 h-1 w-[70%] rounded-xl"></div>
                  </div>
                  <p className="text-right font-bold text-blue-500">70%</p>
                </div>
              </div>
            </div>

            {/* skills */}

            <div className=" p-5 md:p-4 w-[100%] md:w-1/3">
              <div className="shadow flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <Image
                      src={require("../../public/imgs/tailwind.jpeg")}
                      alt={"tailwind-logo"}
                    ></Image>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    TailwindCSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-slate-300 rounded-xl">
                    <div className="absolute bg-sky-600 h-1 w-[80%] rounded-xl"></div>
                  </div>
                  <p className="text-right font-bold text-blue-500">80%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skill;