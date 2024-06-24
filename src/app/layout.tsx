import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/providers/theme-provider";
const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Hut",
  description: "",
  icons: {
    icon: "/assets/vercel.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}> 
          <div className="bg-white h-screen text-black">
            {children}
            <Toaster />
          </div>
      </body>
    </html>
  );
}
