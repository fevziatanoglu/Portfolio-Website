"use client";
import { useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs"

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

    const [darkTheme, setDarkTheme] = useState(false);
    function toggleTheme(){
        setDarkTheme(!darkTheme);
        document.documentElement.setAttribute('data-theme', darkTheme ? "light" : "dark");
    }

    return (<header className="w-full mx-auto fixed top-0 shadow ">

        {/* navbar container */}
        <div className="md:flex justify-between items-center md:py-3 md:px-7 ">

            {/* icon container*/}
            <div>
               <a href="home"><h1 className="md:text-2xl text-xl font-extrabold">Fevzi Atanoglu</h1></a> 
            </div>

            {/* links container */}
            <div className="md:flex items-center  space-x-10">
                {/* link */}
                {NavbarItems.map((item, index) => {
                    return <a href={item.page} key={index}>{item.label}</a>
                })}

                {/* toggle button */}
                <div
                    onClick={() => toggleTheme()}
                    className="toggle-button bg-red-500">
                        
                    <div className={`toggle-dot bg-green-50 flex justify-center items-center ${darkTheme && "toggle-dot-active"}`}>
                        {darkTheme ? <BsFillMoonFill /> : <BsFillSunFill  />}
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
