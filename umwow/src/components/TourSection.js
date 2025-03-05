import React from "react";
import dynamic from "next/dynamic";
import "../styles/TourSection.css";

// ✅ Load ReactPlayer dynamically (disable SSR)
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const TourSection = () => {
  return (
    <section className="tour-section">
      <h2>Take a Virtual Tour of Past UM-WOW</h2>
      <div className="video-container">
        <ReactPlayer
          url="https://youtu.be/Us2MWBK3xz8" // Replace with your YouTube video URL
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          loop={false}
          muted={false}
        />
      </div>
    </section>
  );
};

export default TourSection;