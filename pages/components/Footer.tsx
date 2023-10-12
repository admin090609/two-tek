import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly items-start mt-20 mb-0 bg-[#191722] text-white p-10">
        <div className="flex flex-col items-center">
          <div className="rounded-[20px] border-[#191722] border-2 overflow-hidden mt-[-40%] bg-white text-black">
            <Image
              src="/images/slider.jpg"
              alt="email"
              width="350"
              height="0"
              className="w-full h-full"
            />
            <div className="p-4">
              <p className="mb-2 text-2xl font-extrabold font-sofia">
                Rămâi la curent cu tendințele <br /> în design web și oferte
                exclusive.
              </p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Emailul dvs..."
                  className="h-12 w-[60%] border-[1px] border-gray-200 hover:border-gray-300 rounded-lg email "
                />
                <button className="w-[40%] rounded-lg bg-black opacity-100 hover:opacity-80 text-white ml-2 ease-linear duration-200">
                  Abonează-te
                </button>
              </div>
              <p className="text-[13px] mt-2 text-gray-400">
                Fără spam, vă puteți dezabona în orice moment.
              </p>
            </div>
          </div>
          <h1 className="text-6xl font-bold font-sofia mt-6">2Tek</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-3">Contacte</h1>
          <Link href="tel:+37368548789">+373 685 487 89</Link>
          <Link href="tel:+37360008857">+373 600 088 57</Link>
          <p>two2tek@gmail.com</p>
          <Image src="" alt="" width={100} height={100} />
          <Image src="" alt="" width={100} height={100} />
        </div>
      </div>
    </>
  );
};

export default Footer;
