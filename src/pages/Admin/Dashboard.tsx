import React from "react";
import CardDashboard from "../../components/CardDashboard/CardDashboard";
import Navbar from "../../components/Navbar/Navbar";

import Footer from "../../components/Footer/Footer";

import ListVoter from "../../components/ListVoter/ListVoter";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar />
      <CardDashboard />
      <ListVoter />
      <Footer />
    </div>
  );
};

export default Dashboard;
