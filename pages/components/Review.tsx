import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Review = () => {
  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);
  const myRef = useRef<HTMLDivElement | null>(null);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const h2Ref = useRef<HTMLDivElement | null>(null); // Update this line
  const h3Ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); // State pentru a urmări dacă animația a fost deja activată

  useEffect(() => {
    if (myRef.current && !hasAnimated) {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(myRef.current!); // Use the non-null assertion operator here
        }
      });
      observer.observe(myRef.current!); // Use the non-null assertion operator here
    }

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
    if (h2Ref.current && !hasAnimated) {
      const h2Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible3(true);
          setHasAnimated(true);
          h2Observer.unobserve(h2Ref.current!); // Use the non-null assertion operator here
        }
      });
      h2Observer.observe(h2Ref.current!); // Use the non-null assertion operator here
    }
    if (h3Ref.current && !hasAnimated) {
      const h3Observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible4(true);
          setHasAnimated(true);
          h3Observer.unobserve(h3Ref.current!); // Use the non-null assertion operator here
        }
      });
      h3Observer.observe(h3Ref.current!); // Use the non-null assertion operator here
    }
  }, [hasAnimated]);

  const [reviewData, setReviewData] = useState({
    title: `${content.ReviewApiSudexTitle}`,
    description: `${content.ReviewApiSudexText}`,
    mainImage: "/images/misha.png",
  });

  const handleImageClick = (
    newTitle: string,
    newDescription: string,
    newImage: string
  ) => {
    setReviewData({
      title: newTitle,
      description: newDescription,
      mainImage: newImage,
    });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-black text-black p-20">
        <div>
          <div className=" bg-white p-10 rounded-bl-[20%] rounded-tr-[20%] rounded-md shadow-md shadow-white mb-10">
            <h1
              ref={myRef}
              className={`text-start font-semibold text-4xl mb-5
${isVisible ? "fade-in-top " : ""}`}
            >
              {reviewData.title}
            </h1>
            <p
              ref={h1Ref}
              className={`text-start text-xl max-w-[700px]
${isVisible2 ? "fade-in-left" : ""}`}
            >
              {reviewData.description}
            </p>
          </div>
          <div
            ref={h2Ref}
            className={`flex justify-between
${isVisible3 ? "scale-in-center" : ""}`}
          >
            <div
              onClick={() =>
                handleImageClick(
                  `${content.ReviewApiSudexTitle}`,
                  `${content.ReviewApiSudexText}`,
                  "/images/misha.png"
                )
              }
              className="rounded-[50px] shadow-md shadow-white hover:scale-[0.9] transition duration-500 ease-in-out cursor-pointer"
            >
              <Image
                src="/images/misha.png"
                alt=""
                width={150}
                height={10}
                className="rounded-[50%] "
              />
            </div>
            <div
              onClick={() =>
                handleImageClick(
                  `${content.ReviewADTitle}`,
                  `${content.ReviewADText}`,
                  "/images/viorel.png"
                )
              }
              className="rounded-[50px] shadow-md shadow-white hover:scale-[0.9] transition duration-500 ease-in-out cursor-pointer"
            >
              <Image
                src="/images/viorel.png"
                alt=""
                width={150}
                height={10}
                className="rounded-[50%] "
              />
            </div>
            <div
              onClick={() =>
                handleImageClick(
                  `${content.ReviewSandutaArtTitle}`,
                  `${content.ReviewSAText}`,
                  "/images/vasea.png"
                )
              }
              className="rounded-[50px] shadow-md shadow-white hover:scale-[0.9] transition duration-500 ease-in-out cursor-pointer"
            >
              <Image
                src="/images/vasea.png"
                alt=""
                width={150}
                height={10}
                className="rounded-[50%] "
              />
            </div>
          </div>
        </div>
        <div
          ref={h3Ref}
          className={`
${isVisible4 ? "tilt-in-fwd-br" : ""}`}
        >
          <Image src={reviewData.mainImage} alt="" width={300} height={10} />
        </div>
      </div>
    </>
  );
};

export default Review;
