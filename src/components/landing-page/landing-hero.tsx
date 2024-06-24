import React from "react";
import TryOut from "../globle/try-out";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import IconGroup from "../globle/icon-group";
import ImageContainer from "./image-container";
import Tags from "./tags";

type Props = {};

const LandingHero = (props: Props) => {
    return (
        <section className="flex justify-between items-center gap-10 w-full">
            {/* text-div */}
            <div className="flex flex-col gap-[7rem] ">
                <div className="flex gap-5">
                <div className="">
                    <h1 className="text-5xl text-gray-900 leading-tight font-medium">
                        Chat like never before. <br />
                        Introducing DevHut,the chat app <br />
                        brings you closer.
                    </h1>
                    <p className="mt-5">
                        Feeling disconnected from{" "}
                        <span className="font-bold">friends and family?</span>
                        Tired of clunky messaging apps that slow you down?
                        <br />
                        There's a better way to <span className="font-bold">Chat?</span>
                    </p>
                    <div className="flex items-center gap-5 mt-5">
                        <TryOut />
                        <div className="flex flex-row justify-center items-center gap-2 bg-[#57F2CC] px-2 py-2 rounded-full w-fit">
                            <Link href="#" className="text-gray-800 font-semibold">
                                Learn More
                            </Link>
                            <ArrowUpRight className="text-gray-800 font-semibold p-1 rounded-full bg-[#e7e7e7]" />
                        </div>
                    </div>
                </div>
                <IconGroup/>

            </div>
              <Tags/>
            </div>
            {/* Image div */}
            <div className="hidden lg:flex justify-center items-center">
                <div>
                    <ImageContainer/>
                </div>
            </div>
        </section>
    );
};

export default LandingHero;
