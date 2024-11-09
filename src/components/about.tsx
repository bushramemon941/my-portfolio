"use client";
import Image from "next/image";
import Link from "next/link";
import myPic from "../../public/imgs/my-pic.png"; 

export default function About() {
  return (
    <section className="text-white body-font bg-black">
      <div
        id="about"
        className="container mx-auto flex px-3 md:px-5 py-24 md:flex-row flex-col items-center">
        
        <div className="lg:max-w-lg lg:w-full md:w-[40%] w-5/6 mb-10 md:mb-0">
          <Image
            className="img object-cover object-center mx-auto w-[25rem]"
            alt="hero"
            src={myPic} 
            width={400}
            height={400}
          />
        </div>

        <div className="lg:flex-grow md:w-[60%] lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About Me
          </h1>
          <br className="hidden lg:inline-block" />
          <p className="font mb-8 leading-relaxed text-left">
            Hi, I&apos;m Bushra, a web developer from Karachi, Pakistan. 
            I&apos;m a graduate with experience in front-end development, where I
            focus on building and designing the visible parts of websites and
            web applications. I work with HTML, CSS, and JavaScript to create
            clean and responsive layouts that work well on different
            devices. Passionate about staying updated with the latest web
            technologies and best practices in front-end development.
          </p>
          <div className="flex justify-center">
            <Link href={"#contact"}>
              <button className="button inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
