import React from "react";
import Footer from "../footer";
import About from "./about";
import BlogSection from "./blog-section";
import HeroSection from "./hero-section";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
