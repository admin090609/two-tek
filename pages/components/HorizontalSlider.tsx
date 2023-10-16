import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".horizontal-slider");

    const scrollTween = gsap.to(sections, {
      xPercent: -20 * sections.length,
      ease: "power4.out",
      duration: 25.0,
      delay: 5,
      scrollTrigger: {
        trigger: ".horizontal-slider",
        pin: false,
        scrub: 0.1,
        end: "+=2000",
      },
    });
  });

  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible2, setIsVisible2] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State pentru a urmări dacă animația a fost deja activată

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
      >
        {" "}
        Modul <span className="text-[#008DFD]">nostru</span> de lucru
      </h1>
      <div className="horizontal-slider flex justify-center mt-20">
        <section className="panel red">
          <div>
            <div className="boxuri">
              <span></span>
              <div className="contenturi">
                <h2>Hover me!</h2>
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
                  <h2>Hover me!</h2>
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
                  <h2>Hover me!</h2>
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
                  <h2>Hover me!</h2>
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
