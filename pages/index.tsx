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
import HorizontalSlider from "./components/HorizontalSlider";
import Email from "./components/Email";
import Review from "./components/Review";

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

      <div>
        <HorizontalSlider />
      </div>

      <div>
        <Paralax2 />
      </div>

      <div>
        <Echipa />
      </div>

      <div className="mt-20 mb-32 flex justify-center items-center">
        <Imaginea />
      </div>
      <div className="mb-20">
        <Review />
      </div>

      <CalendlyWidget />

      <div>
        <Email />
      </div>
      <Footer />
    </>
  );
}
