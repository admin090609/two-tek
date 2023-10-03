import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Image from "next/image";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="left-0 top-0 w-full z-10 mt-5">
      <div className="max-w-[1305px] m-auto sm:mt-4 bg-gradient-to-b from-gray-900 to-indigo-800 sm:w-full flex justify-between items-center sm:p-0 p-5 font-semibold text-lg font-nunito h-[115px]">
        <Link href="/" className="flex items-center justify-center sm:p-4 text-white ">
          2Tek
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4">
            <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md">
              <Link href="/">Acasa</Link>
            </div>
          </li>
          <li className="p-4">
            <div
              className=
                  "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
            >
              <Link href="/shop">Acasa</Link>
            </div>
          </li>
          <li className="p-4">
            <div
              className=
                   "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
            >
              <Link href="/about">Acasa</Link>
            </div>
          </li>
          <li className="p-4 mr-3">
            <div
              className=
                   "bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-400 px-2 rounded-md"
            >
              <Link href="/contacte">Acasa</Link>
            </div>
          </li>
        </ul>
        <div className="flex">
        <div className="w-[50px] bg-gradient-to-b from-blue-500 to-purple-900 rounded-[86px]"><div className="w-[25px] h-[25px] bg-gradient-to-b from-orange-200 to-yellow-500 rounded-full"></div>
</div>
          <div className="bg-white mr-8 py-1 px-3 rounded-[85px]">RO {">"}</div>
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
