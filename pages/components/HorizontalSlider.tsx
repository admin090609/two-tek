import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".horizontal-slider");

    const scrollTween = gsap.to(sections, {
      xPercent: 20 * sections.length,
      ease: "power4.out",
      duration: 25.0,
      delay: 5,
      scrollTrigger: {
        trigger: ".horizontal-slider",
        pin: false,
        scrub: 0.1,
        end: "+=8000",
      },
    });
  });

  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible2, setIsVisible2] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (h1Ref.current && !hasAnimated) {
      const h1Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible2(true);
          setHasAnimated(true);
          h1Observer.unobserve(h1Ref.current!); // Use the non-null assertion operator here
        }
      });
      h1Observer.observe(h1Ref.current!); // Use the non-null assertion operator here
    }
  }, [hasAnimated]);

  return (
    <>
      <h1
        ref={h1Ref}
        className={`text-center text-4xl mb-20 mt-20 font-semibold text-[#637684] ${
          isVisible2 ? "animate__animated animate__backInDown" : ""
        }`}
        id="performanta"
      >
        {" "}
        Transformăm ideile tale în
        <span className="text-[#008DFD]"> site-uri</span> funcționale și
        atrăgătoare.
      </h1>
      <div className="horizontal-slider flex justify-center mt-30">
        <section className="panel red">
          <div>
            <div className="boxuri">
              <span></span>
              <div className="contenturi">
                <h1 className="text-xl font-semibold mb-5">
                  Dominați cu ajutorul nostru
                </h1>
                <p>
                  Suntem pasionați să creăm website-uri moderne și captivante,
                  care vă ajută să vă diferențiați de concurență și să atrageți
                  cu succes atenția publicului dvs. Cu designul nostru inovator
                  și de funcționalitate vă ajutăm să atingeți vârful în mediul
                  online.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="panel gray">
          <div>
            <div>
              <div className="boxuri">
                <span></span>
                <div className="contenturi">
                  <h1 className="text-xl font-semibold mb-5">
                    Operăm cu rapiditate
                  </h1>
                  <p>
                    Suntem alegerea perfectă pentru a vă construi cu viteză și
                    eficiență web-siteul dvs, pentru a vă aduce online mai
                    repede decât v-ați imaginat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="panel purple">
          <div>
            <div>
              <div className="boxuri">
                <span></span>
                <div className="contenturi">
                  <h1 className="text-xl font-semibold mb-5">
                    Experiență 2+ Ani
                  </h1>
                  <p>
                    O echipă cu peste 2 ani de experiență în dezvoltarea și
                    design-ul web, specializată în crearea de site-uri
                    personalizate și funcționale pentru diverse proiecte și
                    clienți.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="panel green">
          <div>
            <div>
              <div className="boxuri">
                <span></span>
                <div className="contenturi">
                  <h1 className="text-xl font-semibold mb-5">Plata în Rate</h1>
                  <p>
                    2Tek oferă opțiuni de plată în rate, astfel încât să puteți
                    beneficia de servicii de calitate superioară fără a vă
                    afecta bugetul. Ne angajăm să fim flexibili și să vă oferim
                    o experiență excelentă în ceea ce privește aspectele
                    financiare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="panel green">
          <div>
            <div>
              <div className="boxuri">
                <span></span>
                <div className="contenturi">
                  <h1 className="text-xl font-semibold mb-5">
                    Întotdeauna Conectați
                  </h1>
                  <p>
                    La 2Tek, conectivitatea înseamnă acțiune rapidă și
                    eficientă. Ne concentrăm pe menținerea performanței optime a
                    site-urilor și răspuns rapid la cerințe și schimbări.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ScrollAnimation;
