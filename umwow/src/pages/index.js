// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import Chatbot from "../components/Chatbot";
import TourSection from "../components/TourSection";
import LaunchCountdown from "../components/LaunchCountdown"; // Import the new countdown
import SeniorExperience from "../components/SeniorExperience"; // Import the new senior experience section
import Gallery from "../components/Gallery"; // Import the new gallery section
import "../styles/globals.css";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <main>
        <HomeSection />
        <AboutSection />
        <LaunchCountdown />
        <TourSection />
        <SeniorExperience />
        <Gallery /> {/* Add the gallery section here */}
        <FAQSection />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default Home;