import React from "react";
import Image from "next/image";
import Link from "next/link";

const Email = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-[#008DFD] mx-56 rounded-md px-20 py-5 mb-10">
        <div>
          <h1 className="text-white text-3xl font-semibold mb-3 ">
            Rămâi la curent cu tendințele <br /> în design web și oferte
            exclusive
          </h1>
          <div className="flex items-center">
            <div className="relative w-[80%]">
              <input
                type="text"
                placeholder="Emailul dvs..."
                className="h-12 w-full rounded-[50px] email pl-4 pr-12 focus:outline-none focus:border-[#A9A3AF]"
              />
              <button className="h-12 w-32 absolute top-0 right-0 rounded-[50px] bg-[#FFEA00] hover:bg-[#ffd200] ease-linear duration-300 text-black">
                Trimite
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image src="/images/send.png" alt="" width={200} height={100} className="object-contain" />
        </div>
      </div>
    </>
  );
};

export default Email;
