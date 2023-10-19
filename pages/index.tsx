import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Imaginea from "./components/Imaginea";
import CalendlyWidget from "./components/calendly";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Info from "./components/Info";
import Carousel from "./components/Carousel";
import Parallax1 from "./components/Parallax1";
import Paralax2 from "./components/Paralax2";
import Echipa from "./components/Echipa";
import Email from "./components/Email";
import Review from "./components/Review";
import ScrollAnimation from "./components/HorizontalSlider";
import ScrollUpButton from "./components/ScrollUpButton";

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div>
        <Info />
      </div>
        <div>
          <Carousel />
        </div>

          <div className="w-[100vw] h-[60vh]" id="horizontal">
            <Parallax1 />
          </div>

        <div>
          <Paralax2 />
        </div>

        <div id="echipa">
          <Echipa />
        </div>

        <div
          className="mt-20 mb-32 flex justify-center items-center"
          id="proiecte"
        >
          <Imaginea />
        </div>

        <div className="mb-20" id="feedback">
          <Review />
        </div>

        <CalendlyWidget />

        <div>
          <Email />
        </div>
        <Footer />
      <ScrollUpButton />
    </>
  );
}
