import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="px-6 md:px-12 lg:px-32 bg-teal-50 min-h-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
