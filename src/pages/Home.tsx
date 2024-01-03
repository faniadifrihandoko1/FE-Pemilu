import React from "react";

import Hero from "../components/Heroes/Hero";

import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";

import Blogs from "../components/Blogs/Blogs";
import Navbar from "../components/Navbar/Navbar";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs />

      <Announcement />
      <Footer />
    </div>
  );
};

export default Home;
