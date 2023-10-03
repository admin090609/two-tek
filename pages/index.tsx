import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-20 text-center relative">
        <div className="w-[70vw] mx-auto relative">
          <div
            className="rounded-3xl overflow-hidden"
            style={{ width: "100%", height: "500px" }}
          >
            <Image
              src="/images/slider.jpg"
              alt=""
              layout="fill" // This allows the image to fill its container
              objectFit="cover" // This ensures the image covers the entire container
              className="rounded-3xl"
            />
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex flex-col justify-center items-center text-white w-fit bg-white/25 rounded-3xl mx-16 text-start">
            <p className="text-6xl font-bold mb-4 px-10 py-3">
              Creăm <br /> Profesional <br />{" "}
              <span className="tracking-wider text-[45px] rounded-[50px] px-3 font-light border-2 border-[#451D75]">
                WebSite-ul
              </span>{" "}
              <br />
              Dumneavoastră
            </p>
            <Link href="tel:+37368548789">
              <button className="px-8 py-2 font-bold mb-5 text-black bg-white rounded-[50px]">
                Contactează-ne la +373 685 487 89
              </button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="mt-20 text-center text-4xl">
        Transformăm ideile tale în site-uri <br /> funcționale și atrăgătoare.
      </h1>
      <div className="flex justify-evenly items-center mt-12">
        <div className="w-20 h-20">
          <Link href="">
            {" "}
            <Image
              width={100}
              height={100}
              src="/images/sanduta.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </Link>
        </div>
        <div className="w-20 h-20">
          <Link href="https://admin090609.github.io/">
            <Image
              width={100}
              height={100}
              src="/images/buffi.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </Link>
        </div>
        <div className="w-20 h-20">
          <Link href="https://adfitness.vercel.app/">
            <Image
              width={100}
              height={100}
              src="/images/a&d.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </Link>
        </div>
        <div className="w-16 h-16">
          <Link href="https://apisudex.store/">
            {" "}
            <Image
              width={100}
              height={100}
              src="/images/apisudex.png"
              alt=""
              className="object-contain w-full h-full"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
