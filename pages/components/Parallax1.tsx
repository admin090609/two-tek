import React, { useRef, useEffect, useState } from "react";

const Parallax1 = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="parallax-container">
      <div className="box box1" style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}>
        <h1 className="text-xl font-semibold mb-5">Dominați cu ajutorul nostru</h1>
        <p>
          Suntem pasionați să creăm website-uri moderne și captivante, care vă
          ajută să vă diferențiați de concurență și să atrageți cu succes
          atenția publicului dvs. Cu designul nostru inovator și de
          funcționalitate vă ajutăm să atingeți vârful în mediul online.
        </p>
      </div>
      <div className="box box2" style={{ transform: `translateY(${scrollPosition * 0.7 - window.innerHeight}px)` }}>
        <h1 className="text-xl font-semibold mb-5">Operăm cu rapiditate</h1>
        <p>
          Suntem alegerea perfectă pentru a vă construi cu viteză și eficiență
          web-siteul dvs, pentru a vă aduce online mai repede decât v-ați
          imaginat.
        </p>
      </div>
      <div className="box box3" style={{ transform: `translateY(${scrollPosition * 0.9 - window.innerHeight * 2}px)` }}>
        <h1 className="text-xl font-semibold mb-5">Experiență 2+ Ani</h1>
        <p>
          O echipă cu peste 2 ani de experiență în dezvoltarea și design-ul
          web, specializată în crearea de site-uri personalizate și
          funcționale pentru diverse proiecte și clienți.
        </p>
      </div>
      <div className="box box4">
        <h1 className="text-xl font-semibold mb-5">Plata în Rate</h1>
        <p>
          2Tek oferă opțiuni de plată în rate, astfel încât să puteți
          beneficia de servicii de calitate superioară fără a vă afecta
          bugetul. Ne angajăm să fim flexibili și să vă oferim o experiență
          excelentă în ceea ce privește aspectele financiare.
        </p>
      </div>
      <div className="box box5">
        <h1 className="text-xl font-semibold mb-5">Întotdeauna Conectați</h1>
        <p>
          La 2Tek, conectivitatea înseamnă acțiune rapidă și eficientă. Ne
          concentrăm pe menținerea performanței optime a site-urilor și
          răspuns rapid la cerințe și schimbări.
        </p>
      </div>
      <style jsx>{`
        .parallax-container {
          display: flex;
          flex-direction: column;
          height: 500vh; /* Înălțime suficient de mare pentru a permite derularea */
        }

        .box {
          padding: 1rem;
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.5s ease;
          width: 20%;
          margin-right: 2rem;
          margin-bottom: 2rem;
        }

        .box1 {
          transform: translateY(0);
        }

        .box2 {
          transform: translateY(-100%);
        }

        .box3 {
          transform: translateY(-200%);
        }

        .box4 {
          transform: translateY(-300%);
          margin-right: 0; /* Eliminați marginea dreapta pentru ultimele două box-uri */
        }

        .box5 {
          transform: translateY(-400%);
          margin-right: 0; /* Eliminați marginea dreapta pentru ultimele două box-uri */
        }

        /* Alte stiluri pentru text și titluri */
      `}</style>
    </div>
  );
};

export default Parallax1;
