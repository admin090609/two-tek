import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Info() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Setăm `showComponent` la `true` după o întârziere scurtă pentru a declanșa animația
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 500);
  }, []);

  return (
    <div
      className={`mt-20 text-center relative ${
        showComponent ? "fade-in-up" : "opacity-0 translate-y-[-50px]"
      }`}
    >
      <div className="w-[70vw] mx-auto relative">
        <div
          className="rounded-3xl overflow-hidden"
          style={{ width: "100%", height: "500px" }}
        >
          <Image
            src="/images/slider.jpg"
            alt=""
            layout="fill" // This allows the image to fill its container
            objectFit="cover" // This ensures the image covers the entire container
            className="rounded-3xl"
          />
        </div>
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 px-10 flex flex-col justify-center items-start text-white rounded-3xl text-start ${
            showComponent ? "fade-in-right" : ""
          }`}
        >
          <p className="text-6xl font-semibold mb-4 leading-[60px] py-3 ">
            Creăm <br /> Profesional <br />
            <span className="tracking-wider text-[45px] rounded-[50px] px-3 font-light border-2 border-[#91A8B7]">
              WebSite-ul
            </span>
            <br />
            Dumneavoastră
          </p>
          <Link href="tel:+37368548789">
            <button
              className={`px-8 py-2 font-semibold mb-5 text-black bg-white rounded-[50px] hover:bg-opacity-70  ${
                showComponent ? "fade-in-right" : ""
              }ease-linear duration-500`}
            >
              Contactează-ne la +373 685 487 89
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Info;
