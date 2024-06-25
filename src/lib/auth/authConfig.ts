import NextAuth from "next-auth";
// prisma adapters
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// providers
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import Credentials from "next-auth/providers/credentials"

//for creating user and encryption
import { saltAndHashPassword } from "../password/saltAndHashPassword";
import { getUser } from "../actions/getUser";

const prisma = new PrismaClient();

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, //30 days in seconds
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true, // Allow automatic linking of users table to accounts table in database - not dangerous when used with OAuth providers that already perform email verification (like Google)
    }),
    Resend({
      apiKey: process.env.AUTH_RESEND_KEY,
      from: process.env.EMAIL_FROM
    }),
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" }
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }
    
        const email = credentials.email as string;
        const password = credentials.password as string;
    
        try {
          // Try to get the user
          let user = await getUser(email, password);
    
          if (!user) {
            // User not found or incorrect password
            throw new Error("Invalid email or password");
          }
    
          // Return the user object
          return user;
        } catch (error) {
          // console.error("Error in authorization:", error);
          throw error; // Re-throw the error to be caught by NextAuth
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("Session callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
        },
      };
    },
  },
  debug: true,
});


