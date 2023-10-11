import React from "react";

const Parallax1 = () => {
  return (
    <>
      <h1 className="text-center text-4xl mb-20 text-[#637684] mt-44 font-semibold animate__animated animate__slideInUp">
        Care sunt <span className="text-[#008DFD]">avantajele</span> de a lucra
        cu noi
      </h1>
      <div className="flex justify-between mb-20 text-start">
        <div className="box animate__animated animate__fadeInUp">
          <h1 className="text-xl font-semibold mb-5">Dominați cu ajutorul nostru</h1>
          <p>
            Suntem pasionați să creăm website-uri moderne și captivante, care vă
            ajută să vă diferențiați de concurență și să atrageți cu succes
            atenția publicului dvs. Cu designul nostru inovator și de
            funcționalitate vă ajutăm să atingeți vârful în mediul online.
          </p>
        </div>
        <div className="box animate__animated animate__fadeInUp">
          <h1 className="text-xl font-semibold mb-5">Operăm cu rapiditate</h1>
          <p>
            Suntem alegerea perfectă pentru a vă construi cu viteză și eficiență
            web-siteul dvs, pentru a vă aduce online mai repede decât v-ați
            imaginat.
          </p>
        </div>
        <div className="box animate__animated animate__fadeInUp">
          <h1 className="text-xl font-semibold mb-5">Experiență 2+ Ani</h1>
          <p>
            O echipă cu peste 2 ani de experiență în dezvoltarea și design-ul
            web, specializată în crearea de site-uri personalizate și
            funcționale pentru diverse proiecte și clienți.
          </p>
        </div>
        <div className="box ">
          <h1 className="text-xl font-semibold mb-5">Plata în Rate</h1>
          <p>
            2Tek oferă opțiuni de plată în rate, astfel încât să puteți
            beneficia de servicii de calitate superioară fără a vă afecta
            bugetul. Ne angajăm să fim flexibili și să vă oferim o experiență
            excelentă în ceea ce privește aspectele financiare.
          </p>
        </div>
        <div className="box">
          <h1 className="text-xl font-semibold mb-5">Întotdeauna Conectați</h1>
          <p>
            La 2Tek, conectivitatea înseamnă acțiune rapidă și eficientă. Ne
            concentrăm pe menținerea performanței optime a site-urilor și
            răspuns rapid la cerințe și schimbări.
          </p>
        </div>
      </div>
      <style jsx>{`
        .box {
          flex: 0 0 calc(20% - 2rem); /* Aproximativ 20% din lățime, cu o margine de 1rem */
          margin-right: 2rem; /* Marginea dreapta între box-uri */
          padding: 1rem;
          background-color: #ffffff; /* Culorile pot fi personalizate */
          border-radius: 8px; /* Rotunjimea colțurilor */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Umbră pentru efect */
        }
      `}</style>
    </>
  );
};

export default Parallax1;
