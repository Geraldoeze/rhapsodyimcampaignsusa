import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#d1a018] min-h-screen w-full">
      <div className="">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
