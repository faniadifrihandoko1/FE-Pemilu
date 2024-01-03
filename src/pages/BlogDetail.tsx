import React from "react";
import DetailBlog from "../components/DetailBlog/DetailBlog";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const BlogDetail: React.FC = () => {
  return (
    <div>
      <Navbar />
      <DetailBlog />
      <Footer />
    </div>
  );
};

export default BlogDetail;
