"use server";

import { signIn } from "@/lib/auth/authConfig";

export const handleEmailSignIn = async (email: string) => {
  try {
    await signIn("email", { 
      email, 
      redirectTo: "/dashboard"
    });
  } catch (error) {
    console.error("Email sign-in error:", error);
    throw error;
  }
};