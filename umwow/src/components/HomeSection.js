import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// Import the CSS file
import "../styles/HomeSection.css";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const HomeSection = () => {
  const homeSectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Background animation on page load
    gsap.from(homeSectionRef.current, {
      backgroundPositionY: "0px", // Start position of the background
      duration: 2, // Duration of the animation
      ease: "power2.inOut",
    });

    // Heading animation on page load
    gsap.from(headingRef.current, {
      opacity: 0, // Start invisible
      y: 50, // Slide up from 50px below
      duration: 1.5, // Duration of the animation
      ease: "power3.out",
      delay: 0.5, // Delay before animation starts
    });

    // Paragraph animation on page load
    gsap.from(paragraphRef.current, {
      opacity: 0, // Start invisible
      y: 50, // Slide up from 50px below
      duration: 1.5, // Duration of the animation
      ease: "power3.out",
      delay: 0.8, // Delay before animation starts
    });

    // Background parallax effect on scroll
    gsap.to(homeSectionRef.current, {
      backgroundPositionY: "-100px", // Adjust this value based on your image size
      ease: "none",
      scrollTrigger: {
        trigger: homeSectionRef.current,
        start: "top bottom", // When the top of the section hits the bottom of the viewport
        end: "bottom top",   // When the bottom of the section hits the top of the viewport
        scrub: true,         // Smoothly animate as the user scrolls
      },
    });
  }, []);

  return (
    <section ref={homeSectionRef} id="home" className="home-section">
      {/* Add refs to the heading and paragraph for animations */}
      <h1 ref={headingRef}>Welcome to UM-WOW!</h1>
      <p ref={paragraphRef}>Everything you need to know as a new student at Universiti Malaya.</p>
    </section>
  );
};

export default HomeSection;