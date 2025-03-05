// components/SeniorExperience.js
import React, { useEffect, useState } from "react";
import "../styles/SeniorExperience.css"; // Import the regular CSS file

const SeniorExperience = () => {
  const experiences = [
    {
      photo: "/images/person1.jpg", // Ensure these images are in the public/images/ folder
      name: "John Doe",
      role: "Senior Mentor",
      description: "John is a seasoned professional with over 15 years of experience in software development. He has worked with top companies and is passionate about mentoring the next generation of developers."
    },
    {
      photo: "/images/person2.jpg",
      name: "Jane Smith",
      role: "Industry Expert",
      description: "Jane brings extensive industry knowledge to the table. She has expertise in cybersecurity and has been a key figure in numerous high-profile projects."
    }
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.senior-experience-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) { // Adjust the threshold as needed
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="senior-experience-section">
      <h2>Your Senior Experience</h2>
      <div className="experience-grid">
        {experiences.map((experience, index) => (
          <div key={index} className={`experience-item ${isVisible ? 'animate' : ''}`}>
            <div className="photo-container">
              <img src={experience.photo} alt={`${experience.name}`} className="photo" />
            </div>
            <div className="text-container">
              <div className="speech-bubble">
                <h3>{experience.name}</h3>
                <p className="role">{experience.role}</p>
                <p className="description">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeniorExperience;