import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly items-center">
        <div>
          <h1 className="text-5xl fo">2Tek</h1>
        </div>
        <div>
          <h1>Pagini</h1>
          <Link href="">Acasa</Link>
          <Link href="">Acasa</Link>
          <Link href="">Acasa</Link>
          <Link href="">Acasa</Link>
          <Link href="">Acasa</Link>
        </div>
        <div>
          <h1>Contacte</h1>
          <Link href="tel:+37368548789">+373 685 487 89</Link>
          <Link href="tel:+37360008857">+373 600 088 57</Link>
          <p>Imagetwo2tek@gmail.com</p>
          <Image src="" alt="" width={100} height={100} />
          <Image src="" alt="" width={100} height={100} />
        </div>
      </div>
    </>
  );
};

export default Footer;
