import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mt-20 text-center relative">
        <div className="w-[60vw] mx-auto relative">
          <div className="rounded-3xl overflow-hidden" style={{ width: "100%", height: "450px" }}>
            <Image
              src="/images/slider.jpg"
              alt=""
              layout="fill" // This allows the image to fill its container
              objectFit="cover" // This ensures the image covers the entire container
              className="rounded-3xl"
            />
          </div>
          <div className="absolute top-0 left-0 flex flex-col justify-center items-center text-white w-fit bg-white/25 rounded-3xl mx-16 my-20 text-start">
            <p className="text-5xl font-bold mb-4 px-10 py-3 leading-tight">
              Creăm <br /> Profesional <br /> <span className="rounded-[50px] px-3 font-light border-2 border-[#451D75]">WebSite-ul</span> <br />
              Dumneavoastră
            </p>
            <button className="px-10 py-5">
              Contactează-ne la +373 685 487 89
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
