import { ModeToggle } from "@/components/global/mode-toggle";
import { MessageSquareMore } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  // user?: null | User
};

const Navigation = ({}: Props) => {
  const user = 0;
  return (
    <div className="static top-0 right-0 Z-10 left-0 p-4 flex items-center justify-between">
      <aside className="flex items-center gap-2">
        <Image
          src={"./vercel.svg"}
          width={40}
          height={40}
          alt="DevHut logo"
        />
        <span className="text-xl font-bold">DevHut</span>
      </aside>
      <aside className="flex gap-2 items-center">
        {user ? (
          <div className="flex items-center gap-3">
            <Link
              href={"/user-chat"}
              className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 flex gap-2 items-center"
            >
              <MessageSquareMore size={20} />
              Chat
            </Link>
            {/* <UserButton /> */}
            <ModeToggle />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href={"/login"}
              className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80 flex gap-2 items-center"
            >
              Login
            </Link>
            <ModeToggle />
          </div>
        )}
      </aside>
    </div>
  );
};

export default Navigation;
