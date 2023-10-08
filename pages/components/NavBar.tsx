import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";
import Language from "./Language";
import Color from "./Color";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Delay the animation to ensure it plays when the component mounts
    setTimeout(() => {
      setNav(true);
    }, 100);
  }, []);

  return (
    <div
      className={`left-0 top-0 w-full z-10 mt-5 text-black ${
        nav ? "animate-fadeInDown" : "opacity-0 translate-y-[-50px]"
      } transition-all duration-1000 ease-in-out`}
    >
      <div className="max-w-[1305px] sm:mt-4 sm:w-full bg-[#EFF0F3] flex justify-around items-center sm:p-0 p-5 h-[85px] rounded-[70px] m-auto">
        <Link href="/" className="text-4xl sm:p-4 ml-4 font-bold">
          2Tek
        </Link>

        <ul className="hidden sm:flex text-base font-semibold text-[#585858]">
          <li className="p-4 relative group">
            <div className="group relative">
              <Link href="/">Despre Noi</Link>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#585858] transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative">
              <Link href="/shop">Servicii</Link>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#585858] transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative">
              <Link href="/about">Proiecte</Link>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#585858] transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative">
              <Link href="/about">Procese</Link>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#585858] transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative">
              <Link href="/contacte">Echipă</Link>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#585858] transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"></div>
            </div>
          </li>
        </ul>

        <div className="flex  items-center">
          <div className="mr-5">
            <Language />
          </div>
          <div>
            <Color />
          </div>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-20">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white z-10 text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white z-10 text-center ease-in duration-300"
          }
          onClick={() => setNav(false)}
        >
          <ul>
            <li className="p-4 text-3xl">
              <div
                className={
                  router.pathname === "/"
                    ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                    : ""
                }
              >
                <Link href="/">Acasa</Link>
              </div>
            </li>
            <li className="p-4 text-3xl">
              <div
                className={
                  router.pathname === "/shop"
                    ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                    : ""
                }
              >
                <Link href="/shop">Acasa</Link>
              </div>
            </li>
            <li className="p-4 text-3xl">
              <div
                className={
                  router.pathname === "/about"
                    ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                    : ""
                }
              >
                <Link href="/about">Acasa</Link>
              </div>
            </li>
            <li className="p-4 text-3xl">
              <div
                className={
                  router.pathname === "/contacte"
                    ? "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
                    : ""
                }
              >
                <Link href="/contacte">Acasa</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
