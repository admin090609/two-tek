import React from "react";
import Image from "next/image";

const Review = () => {
  return (
    <>
      <div className="flex justify-around items-center bg-slate-500 rounded-md p-10 mx-72">
        <div>
          <h1 className="text-start text-3xl">Review</h1>
          <p className="text-start text-xl">
            Compania 2Tek a creat site-ul meu într-un mod care a depășit
            așteptările mele. Echipa lor are o cunoaștere profundă a industriei
            și poate reda perfect esența afacerii mele în descrierea site-ului.
          </p>
          <div className="flex justify-between">
            <div>
              <Image src="" alt="" width={100} height={10} />
              <Image src="" alt="" width={100} height={10} />
              <Image src="" alt="" width={100} height={10} />
            </div>
            <div>
              <Image src="" alt="" width={100} height={10} />
              <Image src="" alt="" width={100} height={10} />
              <Image src="" alt="" width={100} height={10} />
            </div>
            <div>
              <Image src="" alt="" width={100} height={10} />
              <Image src="" alt="" width={100} height={10} />
              <Image src="" alt="" width={100} height={10} />
            </div>
          </div>
        </div>
        <div>
          <Image src="" alt="" width={100} height={10} />
        </div>
      </div>
    </>
  );
};

export default Review;
