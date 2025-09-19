"use client";

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Section */}
      <Header />
      {/* Main Page Content */}
      <main className="flex-grow mx-auto w-full my-10">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GuestLayout;
