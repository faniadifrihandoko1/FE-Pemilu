import Navbar from "../components/Navbar/Navbar";
import Info from "../components/Info/Info";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import AnnounVote from "../components/AnnounVote/AnnounVote";
import Footer from "../components/Footer/Footer";

const InfoPemilu = () => {
  return (
    <div>
      <Navbar />
      <Info />
      <CardCarousel />
      <AnnounVote />
      <Footer />
    </div>
  );
};

export default InfoPemilu;
