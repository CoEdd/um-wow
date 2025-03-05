import React from 'react';
import { motion } from 'framer-motion';
import '../styles/AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Content with Animation */}
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
        whileInView={{ opacity: 1, y: 0 }} // Animate into view
        transition={{ duration: 1, ease: 'easeInOut' }} // Smooth transition
        viewport={{ once: true }} // Trigger animation only once
      >
        <h2>About UM-WOW</h2>
        <p>
          UM-WOW is a great way to get acquainted with life at Universiti Malaya! Explore the vibrant campus, meet new friends, and discover endless opportunities.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;