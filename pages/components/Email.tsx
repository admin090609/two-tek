import { useState } from "react";
import { a, useTrail } from "react-spring";
import Image from "next/image";
import Link from "next/link";

const Email = () => {
  const [open, setOpen] = useState(false);

  const [[{ width, opacity }, { scale }], api] = useTrail(2, () => ({
    width: 200,
    opacity: 1,
    scale: 0,
  }));

  const openEmailInput = () => {
    api.start({
      width: 320,
      opacity: 0,
      scale: 1,
      onRest: () => setOpen(true),
    });
  };

  const closeEmailInput = (e) => {
    e.preventDefault();
    api.start({
      width: 200,
      opacity: 1,
      scale: 0,
      onRest: () => setOpen(false),
    });
  };

  return (
    <>
      <div className="flex justify-between items-center bg-[#008DFD] mx-56 rounded-md px-20 py-5 mb-10">
        <div>
          <h1 className="text-white text-3xl font-semibold mb-3 ">
            Rămâi la curent cu tendințele <br /> în design web și oferte
            exclusive
          </h1>
          <div className="flex items-center">
            <div className="relative w-[80%]">
              <div className="relative flex justify-center h-12">
                <a.form
                  style={{
                    width,
                    opacity: opacity.to((o) => 1 - o),
                    pointerEvents: open ? "unset" : "none",
                  }}
                  onSubmit={closeEmailInput}
                  className="w-80 absolute flex py-1 pl-4 pr-1 border rounded-full"
                >
                  <input
                    name="email"
                    type="email"
                    className="focus:outline-none flex-grow bg-transparent"
                    placeholder="Email Address"
                  />
                  <a.button
                    style={{ scale }}
                    type="submit"
                    className="px-5 py-1 text-gray-500 bg-white rounded-full"
                  >
                    Send
                  </a.button>
                </a.form>

                <a.button
                  onClick={openEmailInput}
                  style={{
                    width,
                    opacity,
                    pointerEvents: open ? "none" : "unset",
                  }}
                  className="absolute px-4 py-2 border rounded-full"
                >
                  <a.span style={{ opacity }}>Notify me on launch</a.span>
                </a.button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/send.png"
            alt=""
            width={200}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Email;
