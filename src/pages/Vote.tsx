import React from "react";
import Navbar from "../components/Navbar/Navbar";

import CardCarousel from "../components/CardCarousel/CardCarousel";
import AnnounVote from "../components/AnnounVote/AnnounVote";
import Footer from "../components/Footer/Footer";
import ModalVote from "../components/ModalVote/ModalVote";

const Vote: React.FC = () => {
  return (
    <div>
      <Navbar />
      <ModalVote />
      <CardCarousel />
      <AnnounVote />
      <Footer />
    </div>
  );
};

export default Vote;
