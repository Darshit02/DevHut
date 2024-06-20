import React from "react";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Code2, Fingerprint, Lock } from "lucide-react";
import { GridBox } from "../landing-page/gridbox";

export function GridFile() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const SkeletonAuth = () => (
  <div className="sm:hidden md:block flex justify-center items-center w-full">
    <Lock
    size={30}
    className="h-4 w-4 text-neutral-500"
    />
  </div>
);
const SkeletonShare = () => (
    <div className="hidden md:block">
      hello
    </div>
  );
  const SkeletonComm = () => (
    <div className="hidden md:block">
      {/* <GridBox /> */}
    </div>
  );
const items = [
  {
    title: "Authenticity and Trust",
    description: "user authenticity and trust in the digital world.",
    header: <SkeletonAuth />,
    className: "md:col-span-2",
    icon: <Fingerprint className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Code Share",
    description: "Share Code with your dev friends on Just one cliek.",
    header: <SkeletonShare />,
    className: "md:col-span-1",
    icon: <Code2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Effective Communication",
    description:
      "That;s how to communicate effectively with your team and clients.",
    header: <SkeletonComm/>,
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
