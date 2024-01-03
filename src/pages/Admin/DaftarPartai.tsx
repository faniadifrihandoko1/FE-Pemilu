import React from "react";
import ListPartai from "../../components/ListPartai/ListPartai";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const DaftarPartai: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ListPartai />
      <Footer />
    </div>
  );
};

export default DaftarPartai;
