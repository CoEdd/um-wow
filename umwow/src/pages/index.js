// pages/index.js
import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import FAQSection from "../components/FAQSection";
import Chatbot from "../components/Chatbot";
import TourSection from "../components/TourSection";
<<<<<<< HEAD
import LaunchCountdown from "../components/LaunchCountdown";
import SeniorExperience from "../components/SeniorExperience";
import Gallery from "../components/Gallery";
import UpcomingEvents from "../components/UpcomingEvents";
import Partners from "../components/Partners"; // Import the new partners section
=======
import LaunchCountdown from "../components/LaunchCountdown"; // Import the new countdown
import SeniorExperience from "../components/SeniorExperience"; // Import the new senior experience section
import Gallery from "../components/Gallery"; // Import the new gallery section
>>>>>>> da81444571cf0db356f37a5599a9e724ca938fb7
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
<<<<<<< HEAD
        <Gallery />
        <UpcomingEvents />
        <Partners /> {/* Add the partners section here */}
=======
        <Gallery /> {/* Add the gallery section here */}
>>>>>>> da81444571cf0db356f37a5599a9e724ca938fb7
        <FAQSection />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
};

export default Home;