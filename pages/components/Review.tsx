import React, { useState } from "react";
import Image from "next/image";

const Review = () => {
  const [reviewData, setReviewData] = useState({
    title: "Review",
    description:
      "Compania 2Tek a creat site-ul meu într-un mod care a depășit așteptările mele. Echipa lor are o cunoaștere profundă a industriei și poate reda perfect esența afacerii mele în descrierea site-ului.",
    mainImage: "/images/danu.jpeg",
  });

  const handleImageClick = (newTitle: string, newDescription: string, newImage: string) => {
    setReviewData({
      title: newTitle,
      description: newDescription,
      mainImage: newImage,
    });
  };

  return (
    <>
      <div className="flex justify-around items-center bg-slate-500 rounded-md p-10 mx-72">
        <div>
          <h1 className="text-start text-4xl mb-3">{reviewData.title}</h1>
          <p className="text-start text-xl max-w-[510px] mb-5">{reviewData.description}</p>
          <div className="flex justify-between">
            <div onClick={() => handleImageClick("Title 1", "Description 1", "/images/eduard1.jpeg")}>
              <Image src="/images/eduard1.jpeg" alt="" width={100} height={10} className="rounded-[50px] "/>
            </div>
            <div onClick={() => handleImageClick("Title 2", "Description 2", "/images/danu1.jpeg")}>
              <Image src="/images/danu1.jpeg" alt="" width={100} height={10} className="rounded-[50px] "/>
            </div>
            <div onClick={() => handleImageClick("Title 3", "Description 3", "/images/eduard1.jpeg")}>
              <Image src="/images/eduard1.jpeg" alt="" width={100} height={10} className="rounded-[50px] "/>
            </div>
          </div>
        </div>
        <div>
          <Image src={reviewData.mainImage} alt="" width={200} height={10} />
        </div>
      </div>
    </>
  );
};

export default Review;
