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
            eficiența colaborării în colectiv, oferind suport
            clienților noștri pentru a se dezvolta în mediul digital și a atinge
            rezultate pe care nu le-au atins până acum. Suntem o companie în
            plină expansiune, orientată către progres continuu.
          </p>
        </div>
        <div>
          <Image src="/images/echipa.jpg" alt="" width={600} height={100} />
        </div>
      </div>
    </>
  );
};

export default Echipa;
