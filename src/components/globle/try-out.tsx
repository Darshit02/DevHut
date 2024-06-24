import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const TryOut = (props: Props) => {
  return (
    <div className="flex flex-row justify-center items-center gap-2 bg-[#e7e7e7] px-2 py-2 rounded-full w-fit">
      <Link href="#" className="text-gray-800 font-semibold">
        Try Out
      </Link>
      <ArrowUpRight className="text-gray-800 font-semibold p-1 rounded-full bg-[#57F2CC]" />
    </div>
  );
};

export default TryOut;
