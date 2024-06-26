import { Code, Diamond, Headphones, Pickaxe, RotateCw, ScanFace } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const VideoCompo = (props: Props) => {
  return (
    <section className="h-full w-full bg-gray-200 rounded-2xl flex justify-center items-center flex-col gap-5 mt-[5rem]">
      <div className="px-[10rem] py-[5rem] flex justify-between gap-14">
        <div className="flex flex-col gap-2 text-gray-600 mb-8 bg-gray-100 p-1 rounded-xl h-fit px-5 py-3 mt-20">
            <h1 className="text-2xl text-gray-800 flex gap-2">
                <Code className="text-gray-800 px-2 py-1 bg-gray-200 rounded-full" size={30}/>
                Code Share
            </h1>
            <p className="">
                Share your code with dev friends. <br />
                and get your code reviewed or review others code.
            </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex gap-2 text-gray-600 mb-8 bg-gray-100 p-1 rounded-full">
            <Pickaxe className="px-2 py-1 bg-gray-200 rounded-full" size={30} />
            <p className="font-medium text-lg pr-2">Quality Video</p>
          </div>
          <div className="">
            <Image
              src="/assets/call.svg"
              alt="video"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-3 items-center px-2 py-1 h-fit bg-gray-100 rounded-xl mt-8">
            <ScanFace className="px-2 py-1 bg-black/5 rounded-xl" size={40} />
            <p className="font-medium text-md pr-2">
              Face-to-Face <br /> Chat
            </p>
          </div>
          <div className="">
            <div className="flex gap-0.5 items-center bg-black/5 w-fit rounded-full ml-10">
              <Headphones className="px-2 py-1  rounded-full" size={30} />
              <RotateCw className="px-2 py-1  rounded-full" size={30} />
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div className="flex gap-2 mb-8 bg-gray-100 rounded-xl text-center w-fit">
              <p className="font-medium text-lg px-5 py-1">
                Quality Audio <br /> support
              </p>
            </div>
            <Image src="/assets/image.svg" alt="audio" width={50} height={50} className="rounded-xl drop-shadow-lg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoCompo;
