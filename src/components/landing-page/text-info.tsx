import { Globe, StickerIcon } from "lucide-react";
import React from "react";

type Props = {};

const TextInfo = (props: Props) => {
  return (
    <section className="h-[25rem] w-[80rem] bg-gray-200 rounded-2xl flex justify-center items-center flex-col gap-5">
      <div className="flex justify-center items-center gap-3 text-gray-900">
        <Globe />
        <StickerIcon />
      </div>
      <div className="px-32">
        <p className="text-center font-semibold text-2xl text-gray-900">
          chat smarter and connect deeper? It's free, easy to use, and
          guaranteed to revolutionize the way you connect with the people who
          matter most.
          <span className="px-2 py-1 rounded-full bg-[#57F2CC]">
            use today and experience{" "}
          </span>
          the future of communication.
        </p>
      </div>
    </section>
  );
};

export default TextInfo;
