// components/Gallery.js
import React from "react";
import Slider from "react-slick";
import "../styles/Gallery.css"; // Import the regular CSS file

const Gallery = () => {
  const settingsTop = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // Ensure scrolling doesn't pause on hover
    rtl: true, // Scroll from right to left
  };

  const settingsMid = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // Ensure scrolling doesn't pause on hover
  };

  const settingsBottom = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false, // Ensure scrolling doesn't pause on hover
    rtl: true, // Scroll from right to left
  };

  const galleryItems = [
    {
      photo: "/images/gallery1.jpg", // Ensure these images are in the public/images/ folder
      description: "Past UM-WOW Event 1"
    },
    {
      photo: "/images/gallery2.jpg",
      description: "Past UM-WOW Event 2"
    },
    {
      photo: "/images/gallery3.jpg",
      description: "Past UM-WOW Event 3"
    },
    {
      photo: "/images/gallery4.jpg",
      description: "Past UM-WOW Event 4"
    },
    {
      photo: "/images/gallery5.jpg",
      description: "Past UM-WOW Event 5"
    },
    {
      photo: "/images/gallery6.jpg",
      description: "Past UM-WOW Event 6"
    },
    {
      photo: "/images/gallery7.jpg",
      description: "Past UM-WOW Event 7"
    },
    {
      photo: "/images/gallery8.jpg",
      description: "Past UM-WOW Event 8"
    },
    {
      photo: "/images/gallery9.jpg",
      description: "Past UM-WOW Event 9"
    },
    {
      photo: "/images/gallery10.jpg",
      description: "Past UM-WOW Event 10"
    }
  ];

  return (
    <section className="gallery-section">
      <h2>Gallery of Past UM-WOW Events</h2>
      <div className="gallery-row top-row">
        <Slider {...settingsTop}>
          {galleryItems.map((item, index) => (
            <div key={index} className="polaroid-frame">
              <img src={item.photo} alt={`Gallery ${index + 1}`} className="polaroid-photo" />
              <div className="polaroid-text">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="gallery-row mid-row">
        <Slider {...settingsMid}>
          {galleryItems.map((item, index) => (
            <div key={index} className="polaroid-frame">
              <img src={item.photo} alt={`Gallery ${index + 1}`} className="polaroid-photo" />
              <div className="polaroid-text">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="gallery-row bottom-row">
        <Slider {...settingsBottom}>
          {galleryItems.map((item, index) => (
            <div key={index} className="polaroid-frame">
              <img src={item.photo} alt={`Gallery ${index + 1}`} className="polaroid-photo" />
              <div className="polaroid-text">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;