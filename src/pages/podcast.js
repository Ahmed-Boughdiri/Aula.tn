import React from "react";
import NavBar from "../components/NavBar";
import PodcastContainer from "../components/PodcastContainer";
import PageIndicator from "../components/PageIndicator";
import Footer from "../components/Footer";

const Podcast = () =>{
    return (
        <div>
            <NavBar />
            <PodcastContainer />
            <PageIndicator />
            <Footer />
        </div>
    )
}

export default Podcast;
