import Image from "next/image";
import Link from "next/link";
import React from "react";

const skills = [
  { skill: "React.js" },
  { skill: "Next.js" },
  { skill: "Angular" },
  { skill: "Node.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "CSS" },
  { skill: "Javascript" },
  { skill: "HTML" },
];

import { AiFillGithub, AiFillLinkedin, AiOutlineDown } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";
export const HeroSection = () => {
  return (
    <section className="hero_section h-screen flex lg:flex-row flex-col">
      {/* hero container 1 */}
      <div className="hero_container_1 h-1/2 lg:h-full lg:w-2/3 flex lg:pl-[5rem] justify-center lg:justify-start">
        {/* title */}
        <div className=" flex flex-col justify-center  pt-10 lg:space-y-7 space-y-4 ">
          {/* text */}
          <div className="text-center">
            {/* name h */}
            <h2 className="lg:text-lg text-xs font-semibold  ">
              Hello I&#39;m{" "}
              <span className="lg:text-2xl text-sm font-extrabold alternative-text">
                Fevzi
              </span>{" "}
              , I&#39;m a
            </h2>
            {/* profession h */}
            <h1 className="lg:text-7xl alternative-text text-4xl  font-extrabold">
              Full Stack
            </h1>
            <h1 className="lg:text-7xl alternative-text text-4xl  font-extrabold">
              Developer.
            </h1>
          </div>

            {/* buttons */}
            <div className="flex flex-row justify-around lg:text-lg text-xs font-bold w-full ">
              <button className="contact-button rounded-lg  lg:py-2 lg:px-12  p-2  ">
                Get Contact
              </button>
              <a href="CV.pdf" target="_blank" className="cv-button rounded-lg  lg:py-2 lg:px-12  p-2  ">
                My CV
              </a>
            </div>

          {/* social links */}
          <div className=" w-full flex  justify-around  mt-2 items-start font-semibold lg:text-6xl text-3xl">
            <a
              className="social-link flex flex-row justify-center items-center gap-1  "
              target="_blank"
              href="https://github.com/fevziatanoglu"
            >
              <AiFillGithub />
            </a>
            <a
              className="social-link flex flex-row justify-center items-center gap-1"
              target="_blank"
              href=""
            >
              <AiFillLinkedin />
            </a>
            <a
              className="social-link flex flex-row justify-center items-center gap-1"
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&to=fevziatan2@gmail.com"
            >
              <BiLogoGmail />
            </a>
          </div>
        </div>
      </div>

      {/* hero container 2 */}
      <div className="hero_container_2 h-1/2 lg:h-full flex justify-center items-center lg:w-1/3">
        {/* picture */}
        <div className=" img-container lg:absolute lg:mr-[29rem]  lg:w-[360px] lg:h-[360px] rounded-lg">
          <img
            className=" lg:absolute bottom-5 right-5 lg:w-[350px] lg:h-[350px]  lg:rounded-lg "
            src="/me.png"
            alt={"me"}
          />
        </div>
      </div>
    </section>
  );
};
