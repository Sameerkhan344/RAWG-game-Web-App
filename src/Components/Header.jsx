import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/Images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("theme", theme);
  }, []);
  return (
    <>
      <div className="flex items-center p-3">
        <img src={logo} height={60} width={60} alt="" />
        <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
          <HiOutlineMagnifyingGlass />
          <input
            type="text"
            placeholder="Search Games"
            className="bg-transparent outline-none px-2 w-full"
          />
        </div>
        <div>
          {theme == "light" ? (
            <HiMoon
              className="text-[35px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
              onClick={() => {
                setTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
            />
          ) : (
            <HiSun
              className="text-[35px] bg-slate-200 text-black p-2 rounded-full cursor-pointer"
              onClick={() => {
                setTheme("light");
                localStorage.setItem("theme", "light");
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
