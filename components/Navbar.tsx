"use client";
import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavItem {
  label: string;
  page: string;
}

const NavbarItems: Array<NavItem> = [
  { label: "Home", page: "#home" },
  { label: "About Me", page: "#about" },
  { label: "My Projects", page: "#projects" },
];

export const Navbar = ({isScroll} : {isScroll:boolean}) => {
  // theme
  const [darkTheme, setDarkTheme] = useState(false);
  function toggleTheme() {
    setDarkTheme(!darkTheme);
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "light" : "dark"
    );
  }

  // topdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={`${isScroll ?  "scrolled_header w-full  mx-auto py-7  fixed top-0 z-10 px-5" :  " w-full  mx-auto py-7  fixed top-0 z-10 px-5  "}`}>
      {/* navbar container */}
      <div className="flex justify-between items-center ">
        {/* icon container*/}
        <div>
          <a href="#home">
            <h1 className="lg:text-5xl text-2xl font-bold">
              Fevzi Atanoglu
            </h1>
          </a>
        </div>

        {/*dropdown menu button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="dropdown-button md:hidden"
        >
          {!isDropdownOpen ? (
            <AiOutlineMenu size={25} />
          ) : (
            <AiOutlineClose size={25} />
          )}
        </button>

        {/* dropdown menu */}
        {isDropdownOpen && (
          <div className="dropdown absolute top-14 right-5 rounded-lg flex flex-col p-5 justify-center items-center gap-5 shadow-xl">
            {/* link */}
            {NavbarItems.map((item, index) => {
              return (
                <a href={item.page} key={index}>
                  {item.label}
                </a>
              );
            })}

            <hr></hr>

            {/* toggle button */}
            <div
              onClick={() => toggleTheme()}
              className="toggle-button "
            >
              <div
                className={`toggle-dot  flex justify-center items-center ${
                  darkTheme && "toggle-dot-active"
                }`}
              >
                {darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
              </div>
              <div
                className={`toggle-icon flex justify-center items-center ${
                  darkTheme && "toggle-icon-active"
                }`}
              >
                {!darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
              </div>
            </div>
          </div>
        )}

        {/* links container */}
        <div className=" lg:w-1/3 secondary-text lg:text-lg font-bold  hidden md:flex justify-center   items-center  space-x-10  ">
          {/* link */}
          {NavbarItems.map((item, index) => {
            return (
              <a href={item.page} key={index}>
                {item.label}
              </a>
            );
          })}

          {/* toggle button */}
          <div
            onClick={() => toggleTheme()}
            className="toggle-button "
          >
            <div
              className={`toggle-dot  flex justify-center items-center ${
                darkTheme && "toggle-dot-active"
              }`}
            >
              {darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
            </div>
            <div
              className={`toggle-icon flex justify-center items-center ${
                darkTheme && "toggle-icon-active"
              }`}
            >
              {!darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
