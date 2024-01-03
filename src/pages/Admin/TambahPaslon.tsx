import React from "react";
import AddPaslon from "../../components/AddPaslon/AddPaslon";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const TambahPaslon: React.FC = () => {
  return (
    <div>
      <Navbar />
      <AddPaslon />
      <Footer />
    </div>
  );
};

export default TambahPaslon;
