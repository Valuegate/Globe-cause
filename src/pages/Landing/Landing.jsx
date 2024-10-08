// src/components/LandingPage/LandingPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import VidBg from "../../assets/video/bgvideo.mp4"; // Optional: Background video
import { FaHandsHelping, FaProjectDiagram, FaChartLine } from 'react-icons/fa'; // Import icons

const LandingPage = () => {
  return (
    <div className={styles.LandingPage}>
      {/* Hero Section */}
      <section className={styles.HeroSection}>
        <video autoPlay loop muted className={styles.VideoBackground}>
          <source src={VidBg} type="video/mp4" />
        </video>
        <div className={styles.HeroContent}>
          <h1 className={`${styles.Headline} ${styles.animatedHeadline}`}>
            Empower Communities, Transform Lives
          </h1>
          <p className={`${styles.Subheadline} ${styles.animatedSubheadline}`}>
            Join our platform to support and collaborate with NGOs making a difference.
          </p>
          <div className={styles.CTABtn}>
            <Link to="/signup" className={styles.CTAButton}>
              Get Started
            </Link>
          </div>
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
                <p>Find and collaborate with organizations dedicated to various causes.</p>
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
                <p>Organize and oversee projects to ensure effective implementation.</p>
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
                <p>Monitor the real-world impact of your contributions and efforts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className={styles.AboutSection}>
        <h2 className={styles.SectionTitle}>About Us</h2>
        <p className={styles.AboutText}>
          We are committed to bridging the gap between individuals and NGOs to create a more impactful and collaborative environment. Our mission is to empower communities by facilitating meaningful connections and providing the tools necessary for effective project management and impact tracking.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className={styles.TestimonialsSection}>
        <h2 className={styles.SectionTitle}>What Our Users Say</h2>
        <div className={styles.TestimonialsContainer}>
          <div className={styles.Testimonial}>
            <p>"This platform has revolutionized the way we collaborate with volunteers. Our projects have never been more successful."</p>
            <h4>- Jane Doe, NGO Leader</h4>
          </div>
          <div className={styles.Testimonial}>
            <p>"Connecting with NGOs has been seamless and impactful. Highly recommend to anyone looking to make a difference."</p>
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
      <footer className={styles.Footer}>
        <div className={styles.FooterContent}>
          <p>&copy; {new Date().getFullYear()} Globe Cause. All rights reserved.</p>
          <div className={styles.SocialMedia}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
