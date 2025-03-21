// components/FAQSection.js
import React, { useEffect, useState } from 'react';
import styles from '../styles/FAQSection.module.css'; // Import your CSS module

const FAQSection = () => {
  const [scrollVisible, setScrollVisible] = useState([]); // Controls the animation on scroll
  const [activeIndices, setActiveIndices] = useState([]); // Controls the FAQ open/close toggle

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        const sectionTop = faqSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
          setScrollVisible([0, 1, 2, 3, 4, 5, 6]); // Trigger animation once
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case it's already in view

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle FAQ answer
  const toggleAnswer = (index) => {
    setActiveIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // FAQ Data
  const faqs = [
    {
      question: "What is UM-WOW?",
      answer:
        "UM-WOW stands for 'Ultimate Mentorship - Way of Wisdom.' It is an exclusive mentorship program designed to empower participants with skills, knowledge, and guidance for personal and professional growth.",
    },
    {
      question: "When is the event?",
      answer:
        "The UM-WOW event is scheduled from November 15th to November 17th, 2023. Sessions will be held both online and offline.",
    },
    {
      question: "How can I join?",
      answer:
        "Register at www.um-wow.com/register, pay a $25 fee (scholarships available), and receive confirmation via email.",
    },
    {
      question: "Who can participate?",
      answer:
        "Anyone aged 18 and above is welcome — students, professionals, or anyone looking for growth.",
    },
    {
      question: "Will there be certificates provided?",
      answer:
        "Yes! Participants completing the program will receive a certificate of participation.",
    },
    {
      question: "Is the event online or offline?",
      answer:
        "UM-WOW is hybrid — you can join online or attend at our venue in New York City.",
    },
    {
      question: "Can I get a refund if I can’t attend?",
      answer:
        "Refunds are available up to 7 days before the event. Email refunds@um-wow.com.",
    },
  ];

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="row py-5 justify-content-center align-items-center">
          {/* Section Title */}
          <div className="col-md-8 col-sm-11 text-center">
            <div className="section-title mb-5">
              <h2 className="fs-1 fw-bold text-light">FREQUENTLY ASKED QUESTIONS</h2>
            </div>
          </div>

          <div className="col-md-10 col-sm-10">
            <div className="accordion" id="questions">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion-item my-4 ${styles.accordionItem} 
                    ${scrollVisible.includes(index) ? styles.visible : ''} 
                    ${index % 2 === 0 ? styles.slideLeft : styles.slideRight}`}
                >
                  <h2 className="accordion-header" id={`heading-${index}`}>
                    <button
                      className={`accordion-button collapsed ${styles.accordionButton} 
                        ${activeIndices.includes(index) ? styles.active : ''}`}
                      type="button"
                      onClick={() => toggleAnswer(index)}
                      aria-expanded={activeIndices.includes(index)}
                      aria-controls={`question-${index}`}
                    >
                      {faq.question}
                      <span className={styles.icon}>{activeIndices.includes(index) ? "-" : "+"}</span>
                    </button>
                  </h2>
                  <div
                    id={`question-${index}`}
                    className={`accordion-collapse ${styles.accordionCollapse}`}
                    style={{
                      maxHeight: activeIndices.includes(index) ? '500px' : '0',
                    }}
                    aria-labelledby={`heading-${index}`}
                  >
                    <div className={`accordion-body ${styles.accordionBody}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
