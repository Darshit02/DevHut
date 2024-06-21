'use client'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

export default function Home() {

  const router = useRouter()
  const handleSignin = () => {
    router.push('sign-in')
  }

  return (
   <div className="flex flex-col items-center justify-center h-screen w-screen">
        <h1>Home page</h1>
        <Button className="bg-primary" onClick={handleSignin} >
          Sign in
        </Button>
   </div>
  );
}
