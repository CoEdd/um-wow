// components/Partners.js
import React from "react";
import "../styles/Partners.css"; // Import the regular CSS file

const Partners = () => {
  const partners = [
    {
      logo: "/images/gallery1.jpg", // Ensure these images are in the public/images/ folder
      name: "Partner 1",
      link: "https://partner1.com"
    },
    {
      logo: "/images/gallery2.jpg",
      name: "Partner 2",
      link: "https://partner2.com"
    },
    {
      logo: "/images/gallery3.jpg",
      name: "Partner 3",
      link: "https://partner3.com"
    },
    {
      logo: "/images/gallery4.jpg",
      name: "Partner 4",
      link: "https://partner4.com"
    },
    {
      logo: "/images/gallery5.jpg",
      name: "Partner 5",
      link: "https://partner5.com"
    }
  ];

  return (
    <section className="partners-section">
      <h2>Our Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo-container"
          >
            <img src={partner.logo} alt={partner.name} className="partner-logo" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;