// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import Chatbot from "../components/Chatbot";
import TourSection from "../components/TourSection";
import LaunchCountdown from "../components/LaunchCountdown";
import SeniorExperience from "../components/SeniorExperience";
import Gallery from "../components/Gallery";
import UpcomingEvents from "../components/UpcomingEvents";
import Partners from "../components/Partners"; // Import the new partners section
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
        <Gallery />
        <UpcomingEvents />
        <Partners /> {/* Add the partners section here */}
        <FAQSection />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default Home;