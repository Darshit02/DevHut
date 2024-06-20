import { GridFile } from "@/components/global/grid-file";
import { IntroDev } from "@/components/global/intro-dev";
import { DashboardImage } from "@/components/landing-page/dashboard-image";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:gap-[10rem] gap-[12rem]">
      <section className="h-full w-full pt-32 relative flex items-center justify-center flex-col">
        <div className="text-center">
          <IntroDev />
        </div>
        <div className=" mt-5 md:mt-8 bg-gradient-to-r from-primary to-secondary-forground text-transparent bg-clip-text relative">
          <h1 className="text-5xl font-bold text-center md:text-[100px]">
            Chat like never before.
          </h1>
        </div>
        <p className="mt-3 text-wrap md:text-[30px]">
          Introducing DevHut, the chat app that brings you closer.
        </p>
        <div className="flex justify-center items-centerc mt-10-mb-8">
          <DashboardImage />
        </div>
      </section>
      <section className="flex flex-col">
        <h1 className="text-center text-4xl md:text-6xl font-semibold">
          Devhut goes beyond basic messaging.
        </h1>
        <p className="text-center text-sm text-muted-foreground mt-2">
          Our innovative features let you know more about your friends and
          family.
        </p>
        <div className="mx-5 md:mx-[20rem]">
          <div className="flex mt-8 my-1.5 justify-between items-center">
            <Users size={20} />
            <p className="text-sm">Group Chat</p>
          </div>
          <Separator className="mt-5" />
        </div>
        <div className="mt-10 mx-5">
          <GridFile/>
        </div>
      </section>
    </main>
  );
}
