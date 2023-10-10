import React from "react";
import Image from "next/image";

const Paralax2 = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-20 mt-32 font-semibold text-[#637684]">
        Modul <span className="text-[#008DFD]">nostru</span> de lucru
      </h1>
      <div className="flex justify-around items-center mb-5">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-normal">
            Analiza produsului <br /> și crearea sarcinilor tehnice
          </h1>
          <p className="text-2xl leading-normal">
            Ne vom implica într-un dialog constructiv cu clientul nostru pentru
            a discuta în detaliu despre produsul nostru, apoi preluăm
            responsabilitatea de a elabora specificațiile tehnice, împărțindu-le
            în grupuri mici printre colegii noștri.
          </p>
        </div>
        <div>
          <Image src="/images/cal.png" alt="" width={500} height={300} />
        </div>
      </div>
      <div className="flex justify-around items-center mb-5">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-normal">
            Împărțirea lucrării în etape
          </h1>
          <p className="text-2xl leading-normal">
            Divizăm procesul în etape. În prima săptămână, ne concentrăm pe
            crearea designului web și lucrăm la acest aspect până când sunteți
            complet mulțumit cu produsul final.
          </p>
        </div>
        <div>
          <Image src="/images/cal.png" alt="" width={500} height={100} />
        </div>
      </div>
      <div className="flex justify-around items-center mb-5">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-5 leading-normal">
            Dezvoltarea produsului și suportului său
          </h1>
          <p className="text-2xl leading-normal">
            Dezvoltarea produsului, inclusiv toate aspectele legate de design,
            producție, actualizări, și serviciile oferite pentru a asigura buna
            funcționare a acestuia.
          </p>
        </div>
        <div>
          <Image src="/images/cal.png" alt="" width={500} height={100} />
        </div>
      </div>
    </>
  );
};

export default Paralax2;
