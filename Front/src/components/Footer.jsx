import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaArrowUp, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";
import { IconButton, Zoom, useTheme } from "@mui/material";
import styles from "../styles/components/Footer.module.css";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h5>QuizMaster App</h5>
            <p>A platform to test your knowledge and improve your skills with interactive quizzes.</p>
            <div className={styles.socialIcons}>
              <a href="https://www.linkedin.com/in/vaibhav-kumar-227475289" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://x.com/vaibhavkr473" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/vaibhav_razz_22/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a 
                href="mailto:vaibhavkr387@gmail.com?subject=Query%20about%20QuizMaster&body=Hi%20Vaibhav%2C%0A%0AI%20would%20like%20to%20connect%20regarding%20QuizMaster.%0A%0ABest%20regards"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a href="https://vaibhavkr473.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </div>
          </div>

          <div className={styles.footerSection}>
            <h5>Quick Links</h5>
            <ul className={styles.quickLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/quizzes">Quiz</Link></li>
              {/* <li><Link to="/results">Results</Link></li> */}
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h5>Contact Info</h5>
            <ul className={styles.contactInfo}>
              <li>Email: vaibhavkr387@gmail.com</li>
              <li>Phone: +91...............</li>
              <li>Address: 123 Quiz Street, Knowledge City, Heaven Nation</li>
              {/* <li><Link to="/contact-us">Contact Us</li></Link></li> */}
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; 2025 QuizMaster App. All rights reserved. Created with{" "}
            <FaHeart style={{ color: theme.palette.error.main }} /> by{" "}
            <strong>Vaibhav RaZz</strong>.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Zoom in={showScrollTop}>
        <IconButton
          onClick={scrollToTop}
          className={styles.scrollTop}
          aria-label="scroll to top"
        >
          <FaArrowUp />
        </IconButton>
      </Zoom>
    </>
  );
};

export default Footer;
