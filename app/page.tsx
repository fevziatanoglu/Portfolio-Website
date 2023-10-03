"use client";
import AboutSection from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function Home() {
  const [isShowUpButton, setIsShowUpButton] = useState(false);
  const [prevScroll, setPrevScroll] = useState(1);

  const handleScroll = () => {

    if (window.scrollY > 100) {
      setIsShowUpButton(true);
    } else {
      setIsShowUpButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="">
      <Navbar isScroll={isShowUpButton}/>
      <HeroSection />
      {/* <AboutSection /> */}
      {/* <ProjectsSection /> */}
      {isShowUpButton && (
        <button
          onClick={scrollToTop}
          className=" fixed bottom-5 right-5  z-10 bg-red-500 p-2 rounded-md"
        >
          <AiOutlineArrowUp size={30} />
        </button>
      )}
    </main>
  );
}
