import React from "react";
import NavBar from "../components/NavBar";
import BlogSection from "../components/BlogSection";
import PageIndicator from "../components/PageIndicator";
import Footer from "../components/Footer";

const Blog = () =>{
    return(
        <div>
            <NavBar />
            <BlogSection />
            <PageIndicator />
            <Footer />
        </div>
    )
}

export default Blog;