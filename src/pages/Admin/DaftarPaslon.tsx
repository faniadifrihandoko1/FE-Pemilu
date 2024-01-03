import React from "react";
import ListPastlon from "../../components/ListPaslon/ListPaslon";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const DaftarPaslon: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ListPastlon />
      <Footer />
    </div>
  );
};

export default DaftarPaslon;
