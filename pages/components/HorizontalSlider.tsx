import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".panel");

    const scrollTween = gsap.to(sections, {
      xPercent: -80 * sections.length,
      ease: "power4.out",
      duration: "2050",
      scrollTrigger: {
        trigger: ".horizontal-slider",
        pin: false,
        scrub: 0.1,
        end: "+=500",
      },
    });
  });

  return (
    <div className="horizontal-slider flex justify-center">
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
  );
};

export default ScrollAnimation;
