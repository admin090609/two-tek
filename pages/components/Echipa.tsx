import React from "react";
import Image from "next/image";
import Link from "next/link";
import useLanguage from "../../public/LanguageContext";
import { getTranslatedContent } from "./TranslateRoToRu";

const Echipa = () => {
  const { language, setLanguage } = useLanguage();
  const content = getTranslatedContent(language);
  return (
    <>
      <div className="flex mt-20 justify-around items-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-5">
            {content.EchipaTitle1} <br /> {content.EchipaTitle2}
          </h1>
          <p>
            {content.EchipaText}
          </p>
        </div>
        <div className="bg-gray-700 flex justify-center items-center flex-col rounded-[20px]">
          <Image src="/images/gif.gif" alt="" width={300} height={100} />
          <div className="flex">
            <div className="p-4">
              <Image
                src="/images/danu.jpeg"
                alt=""
                width={2264}
                height={100}
                className="rounded-[20px] w-[250px]"
              />
              <div id="curve" className="card">
                <div className="footer">
                  <div className="connections">
                    <div className="connection twitter">
                      <Link
                        href="https://www.instagram.com/loghindan/"
                        className="icon"
                      >
                        <Image
                          src="/images/instagram.png"
                          alt=""
                          width={200}
                          height={200}
                          className="w-[20px] h-[20px] mt-[7.85px] ml-[7.25px]"
                        />
                      </Link>
                    </div>
                    <div className="connection behance">
                      <Link
                        href="https://github.com/admin090609"
                        className="icon"
                      >
                        <Image
                          src="/images/github.png"
                          alt=""
                          width={200}
                          height={200}
                          className="w-[22.5px] h-[22.5px] mt-[3.5px] ml-[6px]"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="info">
                    <div className="name">{content.NumeDan}</div>
                    <div className="job">{content.Job}</div>
                  </div>
                </div>
                <div className="card-blur"></div>
              </div>
            </div>
            <div className="p-4">
              <Image
                src="/images/eduard.jpeg"
                alt=""
                width={2260}
                height={100}
                className="rounded-[20px] w-[250px]"
              />
              <div id="curve" className="card">
                <div className="footer">
                  <div className="connections">
                    <div className="connection twitter">
                      <Link
                        href="https://www.instagram.com/i_edy_/"
                        className="icon"
                      >
                        <Image
                          src="/images/instagram.png"
                          alt=""
                          width={200}
                          height={200}
                          className="w-[20px] h-[20px] mt-[7.85px] ml-[7.25px]"
                        />
                      </Link>
                    </div>
                    <div className="connection behance">
                      <Link
                        href="https://github.com/eduard134"
                        className="icon"
                      >
                        <Image
                          src="/images/github.png"
                          alt=""
                          width={200}
                          height={200}
                          className="w-[22.5px] h-[22.5px] mt-[3.5px] ml-[6px]"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="info">
                    <div className="name">{content.NumeEdu}</div>
                    <div className="job">{content.Job}</div>
                  </div>
                </div>
                <div className="card-blur"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Echipa;
