import { useEffect, useState } from "react";

const HorizontalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = document.getElementById("slider") as HTMLElement; // Adjust this type as needed

    const handleMouseWheel = (e: WheelEvent) => {
      // Specify the type for 'e'
      if (e.deltaY > 0) {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 4));
      } else {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      }
    };

    if (slider) {
      slider.addEventListener("wheel", handleMouseWheel);

      return () => {
        slider.removeEventListener("wheel", handleMouseWheel);
      };
    }
  }, []);

  return (
    <div id="slider-container">
      <div id="slider">
        <div className="slide" style={{ backgroundColor: "red" }}>
          {" "}
          <div className="box animate__animated animate__fadeInUp">
            <h1 className="text-xl font-semibold mb-5">
              Dominați cu ajutorul nostru
            </h1>
            <p>
              Suntem pasionați să creăm website-uri moderne și captivante, care
              vă ajută să vă diferențiați de concurență și să atrageți cu succes
              atenția publicului dvs. Cu designul nostru inovator și de
              funcționalitate vă ajutăm să atingeți vârful în mediul online.
            </p>
          </div>
        </div>
        <div className="slide" style={{ backgroundColor: "blue" }}>
          <div className="box animate__animated animate__fadeInUp">
            <h1 className="text-xl font-semibold mb-5">Operăm cu rapiditate</h1>
            <p>
              Suntem alegerea perfectă pentru a vă construi cu viteză și
              eficiență web-siteul dvs, pentru a vă aduce online mai repede
              decât v-ați imaginat.
            </p>
          </div>
        </div>
        <div className="slide" style={{ backgroundColor: "green" }}>
          {" "}
          <div className="box animate__animated animate__fadeInUp">
            <h1 className="text-xl font-semibold mb-5">Experiență 2+ Ani</h1>
            <p>
              O echipă cu peste 2 ani de experiență în dezvoltarea și design-ul
              web, specializată în crearea de site-uri personalizate și
              funcționale pentru diverse proiecte și clienți.
            </p>
          </div>
        </div>
        <div className="slide" style={{ backgroundColor: "orange" }}>
          {" "}
          <div className="box ">
            <h1 className="text-xl font-semibold mb-5">Plata în Rate</h1>
            <p>
              2Tek oferă opțiuni de plată în rate, astfel încât să puteți
              beneficia de servicii de calitate superioară fără a vă afecta
              bugetul. Ne angajăm să fim flexibili și să vă oferim o experiență
              excelentă în ceea ce privește aspectele financiare.
            </p>
          </div>
        </div>
        <div className="slide" style={{ backgroundColor: "purple" }}>
          {" "}
          <div className="box">
            <h1 className="text-xl font-semibold mb-5">
              Întotdeauna Conectați
            </h1>
            <p>
              La 2Tek, conectivitatea înseamnă acțiune rapidă și eficientă. Ne
              concentrăm pe menținerea performanței optime a site-urilor și
              răspuns rapid la cerințe și schimbări.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSlider;
