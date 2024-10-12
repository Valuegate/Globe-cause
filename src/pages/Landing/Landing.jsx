// src/components/LandingPage/LandingPage.jsx

import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import VidBg from "../../assets/video/bgvideo.mp4"; // Video to be displayed in Hero Section
import { FaHandsHelping, FaProjectDiagram, FaChartLine } from "react-icons/fa"; // Import icons
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/containers/Footer/Footer";

const LandingPage = () => {
  const headlineText = "Empower Communities, Transform Lives";
  const subheadlineText =
    "Join our platform to support and collaborate with NGOs making a difference.";
  const aboutSectionRef = useRef(null);

  // Reference to the video element
  const videoRef = useRef(null);

  // Helper to split text into spans for animation
  const wrapLetters = (text) =>
    text.split("").map((char, index) => (
      <span
        key={index}
        className={styles.Letter}
        style={{ animationDelay: `${0.05 * index}s` }}
      >
        {char === " " ? "\u00A0" : char} {/* Keeps spaces between words */}
      </span>
    ));

  useEffect(() => {
    const currentSection = aboutSectionRef.current; // Store the ref value in a variable

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.Visible); // Add a class when in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection); // Use the stored variable
      }
    };
  }, []);

  return (
    <div className={styles.LandingPage}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.HeroSection}>
        <div className={styles.HeroContent}>
          <h1 className={styles.Headline}>{wrapLetters(headlineText)}</h1>
          <p className={styles.Subheadline}>{wrapLetters(subheadlineText)}</p>
          <div className={styles.CTABtn}>
            <Link to="/signup" className={styles.CTAButton}>
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.VideoContainer}>
          <video
            ref={videoRef}
            src={VidBg}
            className={styles.HeroVideo}
            autoPlay
            muted
            loop
            playsInline // Ensures compatibility with mobile browsers
          />
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.FeaturesSection}>
        <h2 className={styles.SectionTitle}>Why Choose Us?</h2>
        <div className={styles.FeaturesContainer}>
          {/* Flip Card 1 */}
          <div className={styles.FlipCard}>
            <div className={styles.FlipCardInner}>
              <div className={styles.FlipCardFront}>
                <FaHandsHelping className={styles.FeatureIcon} size={50} />
                <h3>GLO</h3>
              </div>
              <div className={styles.FlipCardBack}>
                <h3>Connect with NGOs</h3>
                <p>
                  Find and collaborate with organizations dedicated to various
                  causes.
                </p>
              </div>
            </div>
          </div>

          {/* Flip Card 2 */}
          <div className={styles.FlipCard}>
            <div className={styles.FlipCardInner}>
              <div className={styles.FlipCardFront}>
                <FaProjectDiagram className={styles.FeatureIcon} size={50} />
                <h3>BE</h3>
              </div>
              <div className={styles.FlipCardBack}>
                <h3>Manage Projects</h3>
                <p>
                  Organize and oversee projects to ensure effective
                  implementation.
                </p>
              </div>
            </div>
          </div>

          {/* Flip Card 3 */}
          <div className={styles.FlipCard}>
            <div className={styles.FlipCardInner}>
              <div className={styles.FlipCardFront}>
                <FaChartLine className={styles.FeatureIcon} size={50} />
                <h3>CAUSE</h3>
              </div>
              <div className={styles.FlipCardBack}>
                <h3>Track Impact</h3>
                <p>
                  Monitor the real-world impact of your contributions and
                  efforts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.AboutSection} ref={aboutSectionRef}>
        <h2 className={styles.SectionTitle}>About Us</h2>
        <p className={styles.AboutText}>
          We are committed to bridging the gap between individuals and NGOs to
          create a more impactful and collaborative environment. Our mission is
          to empower communities by facilitating meaningful connections and
          providing the tools necessary for effective project management and
          impact tracking.
        </p>
      </section>

      {/* Partners Section */}
      <section className={styles.PartnersSection}>
        <h2 className={styles.SectionTitle}>Meet Our Partners</h2>
        <div className={styles.PartnersContainer}>
          {/* List of partners (example logos or names) */}
          <div className={styles.PartnerItem}>Partner 1</div>
          <div className={styles.PartnerItem}>Partner 2</div>
          <div className={styles.PartnerItem}>Partner 3</div>
          <div className={styles.PartnerItem}>Partner 4</div>
          <div className={styles.PartnerItem}>Partner 5</div>
          {/* Add more partner items as needed */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.TestimonialsSection}>
        <h2 className={styles.SectionTitle}>What Our Users Say</h2>
        <div className={styles.TestimonialsContainer}>
          <div className={styles.Testimonial}>
            <p>
              "This platform has revolutionized the way we collaborate with
              volunteers. Our projects have never been more successful."
            </p>
            <h4>- Jane Doe, NGO Leader</h4>
          </div>
          <div className={styles.Testimonial}>
            <p>
              "Connecting with NGOs has been seamless and impactful. Highly
              recommend to anyone looking to make a difference."
            </p>
            <h4>- John Smith, Volunteer</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.CTASection}>
        <h2>Ready to Make a Difference?</h2>
        <Link to="/signup" className={styles.CTAButton}>
          Join Us Today
        </Link>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
