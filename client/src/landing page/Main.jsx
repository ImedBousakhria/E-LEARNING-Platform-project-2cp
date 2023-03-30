import React from "react";
import Navbar from "./src/Navbar";
import Hero from "./src/Hero";
import Programs from "./src/Programs";
import Footer from "./src/Footer";

const Main = () => {
  return (
    <div className="flex flex-col gap-[5rem] bg-primary">
      <Navbar />
      <main className="flex flex-col gap-[5rem]">
        <Hero />
        <Programs />
      </main>
      <Footer />
    </div>
  );
};

export default Main;
