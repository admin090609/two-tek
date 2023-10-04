import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly items-start mt-20 mb-0">
        <div>
          <h1 className="text-6xl font-bold">2Tek</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-3">Pagini</h1>
          <Link href="">Acasa</Link>
          <Link href="">Acasa</Link>
          <Link href="">Acasa</Link>
          <Link href="">Acasa</Link>
          <Link href="">Acasa</Link>
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
