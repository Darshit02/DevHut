import React from "react";
import Logo from "../globle/logo";
import { Links } from "@/lib/constant";
import { ArrowUpRight, Dot, Home } from "lucide-react";
import Link from "next/link";
import TryOut from "../globle/try-out";

type Props = {};

const NavigationBar = (props: Props) => {
    return (
        <section className="relative bg-transparent">
            <div className="flex justify-between items-center mt-6">
                {/* logo */}
                <div className="flex justify-center items-center gap-10 ">
                    <Logo />
                    {/* contect-Us button */}
                    <Link href="#" className="text-gray-800  font-semibold flex justify-center items-center gap-1 bg-[#ece9e9] px-3 py-2 rounded-full " >
                        Contact
                        <Dot className="animate-pulse text-[#4dffd2]" />
                    </Link>
                </div>
                {/* Nav Links */}
                <div className="hidden md:block">
                    <div className="flex justify-center items-center gap-10 bg-[#e7e7e7] px-5 py-2 rounded-full">
                        <Link href="/landing">
                            <Home className="text-gray-800 h-5 w-5" />
                        </Link>
                        {
                            Links.map((link, i) => (
                                <Link className="text-gray-800 font-semibold" href={link.href} key={link.href}>
                                    {link.name}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                {/* started Section */}
               <TryOut/>
            </div>
        </section>
    );
};

export default NavigationBar;
