import React from "react";
import Hero from "../components/Hero";
import "../components/layout.css";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Articles from "../components/Articles";
import Podcasts from "../components/Podcast";
import Footer from "../components/Footer";
import "../layout/4K.css";

const IndexPage = () => (
  <div>
    <Hero />
    <Features />
    <Banner />
    <Articles />
    <Podcasts />
    <Footer />
  </div>
)

export default IndexPage
