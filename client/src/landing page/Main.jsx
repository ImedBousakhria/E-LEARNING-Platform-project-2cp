import React from "react";
import Navbar from "./src/Navbar";
import Hero from "./src/Hero";
import Programs from "./src/Programs";
import Footer from "./src/Footer";

const Main = () => {
  return (
    <div className="flex flex-col gap-[3rem] bg-primary">
      <Navbar />
      <Hero />
      <Programs />
      <Footer />
    </div>
  );
};

export default Main;
