"use client"
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { handleGoogleSignIn } from "@/lib/auth/SignInServerAction";


type Props = {};

const SigninPage = (props: Props) => {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold text-primary">Welcome to DevHut</h1>
        <p className="text-muted-foreground">
          Sign up to start chatting with other developers.
        </p>
      </div>
      <Card className="bg-card text-card-foreground ">
        <CardContent className="space-y-4">
          <div className="space-y-2 mt-5">
            <Label htmlFor="name" className="text-primary-foreground ">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              className="border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-primary-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border-primary"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-primary-foreground">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter a password"
              className="border-primary"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-primary-foreground">
              I agree to the terms of service
            </Label>
          </div>
          <div className="flex flex-row items-center justify-center gap-4">
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 flex-1"
            >
              <FaGithub className="h-5 w-5" />
              Github
            </Button>
            <Button
              onClick={() => handleGoogleSignIn()}
              variant="outline"
              className="flex items-center justify-center gap-2 flex-1"
            >
              <FaGoogle className="h-5 w-5" />
              Google
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4 justify-between">
          <Button className="w-full bg-primary text-primary-foreground">
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SigninPage;
