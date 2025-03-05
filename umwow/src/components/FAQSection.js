import React, { useState } from "react";
import "../styles/FaqSection.css";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the active FAQ item
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ Data
  const faqs = [
    {
      question: "What is UM-WOW?",
      answer:
        "UM-WOW stands for 'Ultimate Mentorship - Way of Wisdom.' It is an exclusive mentorship program designed to empower participants with the skills, knowledge, and guidance needed to achieve personal and professional growth. Through interactive sessions, workshops, and one-on-one mentorship, UM-WOW aims to inspire individuals to unlock their full potential.",
    },
    {
      question: "When is the event?",
      answer:
        "The UM-WOW event is scheduled to take place from November 15th to November 17th, 2023. The program will run for three days, with sessions held both online and offline to accommodate participants from different locations.",
    },
    {
      question: "How can I join?",
      answer:
        "Joining UM-WOW is easy! Follow these steps:\n" +
        "1. Register Online: Visit our official website at www.um-wow.com/register and fill out the registration form.\n" +
        "2. Pay the Registration Fee: A nominal fee of $25 is required to secure your spot (scholarships are available for eligible candidates).\n" +
        "3. Receive Confirmation: Once registered, you’ll receive a confirmation email with further instructions and access details.\n" +
        "For any queries during registration, feel free to contact us at support@um-wow.com.",
    },
    {
      question: "Who can participate?",
      answer:
        "UM-WOW is open to individuals aged 18 and above who are eager to learn and grow. Whether you’re a student, a working professional, or someone looking to pivot in your career, this program is designed to cater to diverse audiences.",
    },
    {
      question: "Will there be certificates provided?",
      answer:
        "Yes! All participants who successfully complete the UM-WOW program will receive a certificate of participation. This certificate acknowledges your commitment to self-improvement and can be added to your resume or LinkedIn profile.",
    },
    {
      question: "Is the event online or offline?",
      answer:
        "UM-WOW is a hybrid event, meaning you can choose to attend either online (via Zoom or our dedicated platform) or offline at our main venue in New York City. Please select your preferred mode of attendance during registration.",
    },
    {
      question: "Can I get a refund if I can’t attend?",
      answer:
        "We offer refunds up to 7 days before the event start date. If you need to cancel your registration, please email us at refunds@um-wow.com with your request. Note that a small processing fee may apply.",
    },
  ];

  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className="faq-item">
            <button
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span className="icon">{activeIndex === index ? "-" : "+"}</span>
            </button>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQSection;
