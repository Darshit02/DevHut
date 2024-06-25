"use client";
import React, { useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaCode, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { handleGoogleSignIn } from "@/lib/auth/SignInServerAction";
import Link from "next/link";
import { handleEmailSignIn } from "@/lib/auth/EmailSignInAction";
import { useRouter } from "next/navigation";


type Props = {};

const SigninPage = (props: Props) => {

  const [isPending, startTransition] = useTransition()
  const [formData, setFormData] = useState({ email: "", password: "" })
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    startTransition(async () => {
      try {
        await handleEmailSignIn(formData.email, formData.password)
        // If we get here, it means the sign-in was successful
        router.push("/dashboard")  // or wherever you want to redirect after successful sign-in
      } catch (error) {
        console.error("Sign-in error:", error)
        // Handle the error (e.g., show an error message to the user)
      }
    })
  }


  
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="flex flex-col justify-center w-full h-screen lg:w-1/2 p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 bg-white text-gray-500">
        <div className="flex items-center space-x-2">
          <FaCode className="h-5 w-5 sm:h-6 sm:w-6" />
          <h1 className="text-xl sm:text-2xl font-bold">DevHut</h1>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Namaste,</h2>
          <p className="text-sm sm:text-base text-gray-500">
            Login to start chatting with other developers.
          </p>
        </div>
        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
          <div>
            <Input
              type="email"
              placeholder="example@gmail.com"
              className="w-full"
              maxLength={320}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, email: event.target.value })
              }
              disabled={isPending}
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="**********"
              className="w-full"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, password: event.target.value })
              }
              disabled={isPending}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white"
          >
            Sign In with Email
          </Button>
        </form>
        <Separator className="text-black my-2" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 w-full sm:w-auto sm:flex-1 relative"
            disabled
            title="Coming soon"
          >
            <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
            Github
          </Button>
          <Button
            onClick={() => handleGoogleSignIn()}
            variant="outline"
            className="flex items-center justify-center gap-2 w-full sm:w-auto sm:flex-1"
          >
            <FcGoogle className="h-4 w-4 sm:h-5 sm:w-5" />
            Google
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 h-screen bg-white items-center justify-center p-4">
        <img
          src="/assets/Login.png"
          alt="Login Illustration"
          className="w-full h-full object-cover rounded-lg -scale-x-100"
        />
      </div>
    </div>
  );
};

export default SigninPage;