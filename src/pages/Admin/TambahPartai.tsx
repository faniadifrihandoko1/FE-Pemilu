import React from "react";
import AddPartai from "../../components/AddPartai/AddPartai";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const TambahPartai: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AddPartai />
      <Footer />
    </div>
  );
};

export default TambahPartai;
