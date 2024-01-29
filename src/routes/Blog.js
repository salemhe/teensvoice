import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import BlogImg from "../media/50.jpg";
import Footer from "../components/footer/Footer";
import Blogpost from "../components/blogpost/Blogpost";

const Blog = () => {
    return (
      <div>
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={BlogImg}
          title="Blog"
          btnClass="hide"
         />
            
        
        <Blogpost />
        <Footer />
      </div>
    );
}

export default Blog;
