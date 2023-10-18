import React, { useState } from "react";
import Image from "next/image";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Review = () => {
  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);

  const [reviewData, setReviewData] = useState({
    title: "Review - APISUDEX",
    description:
      "Colaborarea cu Two Tek pentru dezvoltarea website-ului nostru a fost cu adevărat excepțională. De la calitatea lor remarcabilă și atenția minuțioasă acordată fiecărui detaliu, până la crearea unui website unic și memorabil. Îi recomandăm cu încredere celor care caută parteneri de încredere în acest domeniu.",
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
            <h1 className="text-start font-semibold text-4xl mb-5">
              {reviewData.title}
            </h1>
            <p className="text-start text-xl max-w-[700px]">
              {reviewData.description}
            </p>
          </div>
          <div className="flex justify-between">
            <div
              onClick={() =>
                handleImageClick(
                  `${content.ReviewApiSudexTitle}`,
                  `${content.ReviewApiSudexText}`,
                  "/images/misha.png"
                )
              }
              className="rounded-[50px] shadow-md shadow-white hover:scale-[0.9] transition duration-500 ease-in-out"
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
              className="rounded-[50px] shadow-md shadow-white hover:scale-[0.9] transition duration-500 ease-in-out"
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
              className="rounded-[50px] shadow-md shadow-white hover:scale-[0.9] transition duration-500 ease-in-out"
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
        <div>
          <Image src={reviewData.mainImage} alt="" width={300} height={10} />
        </div>
      </div>
    </>
  );
};

export default Review;
