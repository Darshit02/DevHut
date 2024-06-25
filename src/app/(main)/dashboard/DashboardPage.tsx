"use client";
import { Button } from "@/components/ui/button";
import { handleSignOut } from "@/lib/auth/SignoutServerAction";
import React from "react";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col h-screen w-screen justify-center items-center">
        <div>Dashboard</div>
        <Button onClick={() => handleSignOut()}>Sign out</Button>
      </div>
    </div>
  );
};

export default DashboardPage;
