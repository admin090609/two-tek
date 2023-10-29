import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import Language from "./Language";
import Color from "./Color";
import { Link as ScrollLink } from "react-scroll";
import TranslateRoToRu from "./TranslateRoToRu";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const router = useRouter();

  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  useEffect(() => {
    // Delay the animation to ensure it plays when the component mounts
    setTimeout(() => {
      setNav(true);
    }, 500);
  }, []);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the mobile menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`left-0 top-0 w-full mt-5 text-black z-bug px-4 md:px-8 ${
        nav ? "text-focus-in" : "opacity-0 translate-y-[-50px]"
      } transition-all duration-1000 ease-in-out`}
    >
      <div
        className="max-w-[1305px] sm:mt-4 sm:w-full flex justify-evenly items-center sm:p-0 p-5 h-[70px] rounded-[70px] m-auto"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, var(--nav_bg1), var(--nav_bg2), var(--nav_bg3))",
        }}
      >
        <div className="text-4xl sm:p-4 font-bold text-focus-in -ml-20 md:-ml-40 lg:ml-0">
          2Tek
        </div>

        {isMenuOpen ? (
          <AiOutlineClose
            className="text-4xl -mr-20 md:-mr-40 lg:mr-0 cursor-pointer flex lg:hidden z-10"
            onClick={closeMenu}
            size={20}
          />
        ) : (
          <AiOutlineMenu
            className="text-4xl -mr-20 md:-mr-40 lg:mr-0 cursor-pointer flex lg:hidden"
            onClick={toggleMenu}
            size={20}
          />
        )}

        {/* Navigation links for PC */}
        <ul
          className="hidden lg:flex text-base font-semibold text-white"
          style={{ color: "var(--link_color)" }}
        >
          <li className="p-4 relative group">
            <div className="group relative tracking-in-expand-fwd-bottom">
              <ScrollLink
                to="horizontal"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="cursor-pointer"
              >
                {content.Nav1}
              </ScrollLink>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"
                style={{ background: "var(--link_hover)" }}
              ></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative tracking-in-expand-fwd-bottom">
              <ScrollLink
                to="echipa"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1800}
                className="cursor-pointer"
              >
                {content.Nav2}
              </ScrollLink>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"
                style={{ background: "var(--link_hover)" }}
              ></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative tracking-in-expand-fwd-bottom">
              <ScrollLink
                to="proiecte"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1800}
                className="cursor-pointer"
              >
                {content.Nav3}
              </ScrollLink>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"
                style={{ background: "var(--link_hover)" }}
              ></div>
            </div>
          </li>
          <li className="p-4 relative group">
            <div className="group relative tracking-in-expand-fwd-bottom">
              <ScrollLink
                to="feedback"
                spy={true}
                smooth={true}
                offset={-60}
                duration={2000}
                className="cursor-pointer"
              >
                {content.Nav4}
              </ScrollLink>
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 transform translate-y-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-bottom"
                style={{ background: "var(--link_hover)" }}
              ></div>
            </div>
          </li>
        </ul>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-[-3vh] left-0 right-0 text-white bg-gray-700 h-[102vh] flex justify-center items-center text-center">
            <ul className="flex flex-col justify-center items-center text-center gap-4 md:text-2xl">
              <li className="my-2">
                <ScrollLink
                  to="horizontal"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  onClick={closeMenu}
                >
                  {content.Nav1}
                </ScrollLink>
              </li>
              <li className="my-2">
                <ScrollLink
                  to="echipa"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1800}
                  onClick={closeMenu}
                >
                  {content.Nav2}
                </ScrollLink>
              </li>
              <li className="my-2">
                <ScrollLink
                  to="proiecte"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1800}
                  onClick={closeMenu}
                >
                  {content.Nav3}
                </ScrollLink>
              </li>
              <li className="my-2">
                <ScrollLink
                  to="feedback"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={2000}
                  onClick={closeMenu}
                >
                  {content.Nav4}
                </ScrollLink>
              </li>
              <li className="my-2">
                <TranslateRoToRu />
              </li>
              <li className="my-2">
                <Color />
              </li>
            </ul>
          </div>
        )}

        <div className="lg:flex items-center hidden">
          <div className="mr-5">
            <TranslateRoToRu />
          </div>
          <div>
            <Color />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
