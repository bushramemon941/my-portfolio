"use client";



import React, { useState } from "react";

import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";


const Navbar = () => {
  const [isMenu, setMenu] = useState(false);

  function toggle() {
    setMenu(!isMenu);
  }

  return (
    <div className="py-6 bg-black">
      {/* Nav1 for Desktop */}
      <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border border-zinc-600 p-3 rounded-full bg-gradient-to-b from-slate-700 to-slate-500">
        <div>
          
        <span className="text-xl text-black cursor-pointer font-bold ml-2">
          Bushra <span className="text-slate-400 font-bold">Memon</span>
        </span>
        </div>

        <ul className=" md:flex hidden gap-10 items-center font-[700] mr-5 text-[20px]">
          <li>
            <Link className="line" href={"/"}>Home</Link>
          </li>
          <li>
            <Link className="line" href={"/about"}>About</Link>
          </li>
          <li>
            <Link className="line" href={"/my-projects"}>Projects</Link>
          </li>
          <li>
            <Link className="line" href={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link className="line" href={"/contact-us"}>Contact</Link>
          </li>
        </ul>
       {/* Menu Icon */}
       <div onClick={toggle}>
  <IoMdMenu className=" block md:hidden cursor-pointer" size={20}{...(null as any)} />
</div>




          
      
      </div>
      

      {/* Nav2 for Mobile */}
      <div 
        className={` nav2 md:hidden fixed top-[0px] right-0 w-full h-screen flex  justify-center bg-[#080404ee] text-white font-bold z-10
          transition-all duration-500 ease-in-out transform ${
            isMenu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
          }`}
      >
        <div className="absolute right-11 top-10 font-semibold">

        <IoCloseSharp className ="text-gray-700" size={50} onClick={toggle} {...(null as any)}/>
        </div>
       
        <ul className="navs z-10 flex md:hidden flex-col justify-center items-center   text-[20px] gap-16">
          <li >
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/my-projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;