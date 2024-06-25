"use server"

import { AuthError } from "next-auth"
import { signIn } from "./authConfig" 

export const handleEmailSignIn = async (email: string, password: string) => {
  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    
    if (result?.error) {
      throw new Error(result.error)
    }
    
    return result
  } catch (error) {
    if (error instanceof Error) {
      throw error // Re-throw the error to be caught by the client
    }
    throw new Error("An unexpected error occurred")
  }
}