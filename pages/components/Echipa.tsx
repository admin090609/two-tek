import React from "react";
import Image from "next/image";

const Echipa = () => {
  return (
    <>
      <div className="flex mt-20 justify-around items-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-5">
            Echipa <br /> Noastră
          </h1>
          <p>
            Echipa noastră are ca obiectiv să aducă inovație și să sporească
            eficiența colaborării în colectiv, oferind suport clienților noștri
            pentru a se dezvolta în mediul digital și a atinge rezultate pe care
            nu le-au atins până acum. Suntem o companie în plină expansiune,
            orientată către progres continuu.
          </p>
        </div>
        <div className="bg-gray-700 flex justify-center items-center flex-col rounded-[20px]">
          <Image src="/images/gif.gif" alt="" width={300} height={100} />
          <div className="flex">
            <div className="p-4">
              <Image src="/images/danu.png" alt="" width={250} height={100} />
            </div>
            <div className="p-4">
              <Image src="/images/eduard.png" alt="" width={250} height={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Echipa;
