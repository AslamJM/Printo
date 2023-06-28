import React from "react";
import Navbar from "./Navbar";
import { Inconsolata } from "next/font/google";
import { cn } from "@/utils/functions";

const inter = Inconsolata({ subsets: ["latin"], variable: "--font-inc" });

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={cn(
        "px-6 md:px-12 lg:px-32 bg-teal-50 min-h-screen",
        inter.className
      )}
    >
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
