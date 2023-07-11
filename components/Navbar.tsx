"use client";
import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavItem {
    label: string;
    page: string;
}

const NavbarItems: Array<NavItem> = [
    { label: "Home", page: "home" },
    { label: "About Me", page: "about" },
    { label: "My Projects", page: "projects" }

]


export const Navbar = () => {
    // theme
    const [darkTheme, setDarkTheme] = useState(false);
    function toggleTheme() { setDarkTheme(!darkTheme); document.documentElement.setAttribute('data-theme', darkTheme ? "light" : "dark"); }

    // topdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (<header className="w-full mx-auto p-2 fixed top-0 z-10  ">
        {/* navbar container */}
        <div className="flex justify-between items-center md:py-3 md:px-7 px-4 py-2">





            {/* icon container*/}
            <div>
                <a href="home"><h1 className="text-2xl font-semibold ">Fevzi Atanoglu</h1></a>
            </div>





            {/*dropdown menu button */}
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="md:hidden">
                {!isDropdownOpen ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
            </button>

            {/* dropdown menu */}
            {isDropdownOpen && <div className="dropdown absolute top-14 right-5 rounded-lg flex flex-col p-5 justify-center items-center gap-5 shadow-xl">

                {/* link */}
                {NavbarItems.map((item, index) => {
                    return <a href={item.page} key={index}>{item.label}</a>
                })}

                <hr></hr>

                {/* toggle button */}
                <div
                    onClick={() => toggleTheme()}
                    className="toggle-button bg-red-500">
                    <div className={`toggle-dot bg-green-50 flex justify-center items-center ${darkTheme && "toggle-dot-active"}`}>
                        {darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </div>
                    <div className={`toggle-icon flex justify-center items-center ${darkTheme && "toggle-icon-active"}`}>
                        {!darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </div>
                </div>




            </div>
            }


            {/* links container */}
            <div className="hidden md:flex   items-center  space-x-10  ">


                {/* link */}
                {NavbarItems.map((item, index) => {
                    return <a href={item.page} key={index}>{item.label}</a>
                })}


                {/* toggle button */}
                <div
                    onClick={() => toggleTheme()}
                    className="toggle-button bg-red-500">
                    <div className={`toggle-dot bg-green-50 flex justify-center items-center ${darkTheme && "toggle-dot-active"}`}>
                        {darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </div>
                    <div className={`toggle-icon flex justify-center items-center ${darkTheme && "toggle-icon-active"}`}>
                        {!darkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
                    </div>
                </div>


            </div>


        </div>
    </header>

    )
}
