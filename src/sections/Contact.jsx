import React from 'react';
import '../styles/Contact.css';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaPaw } from 'react-icons/fa';

const Contact = () => {

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-links-container">
              <a href="mailto:ashansagomes95@gmail.com" className="contact-card email-card">
                <div className="icon-box"><FaEnvelope /></div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <span>ashansagomes95@gmail.com</span>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/ashansagomes/" target="_blank" rel="noopener noreferrer" className="contact-card linkedin-card">
                <div className="icon-box"><FaLinkedin /></div>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <span>Connect with me</span>
                </div>
              </a>
              
              <a href="https://wa.me/94711601682" target="_blank" rel="noopener noreferrer" className="contact-card whatsapp-card">
                <div className="icon-box"><FaWhatsapp /></div>
                <div className="contact-details">
                  <h3>WhatsApp</h3>
                  <span>Chat Now</span>
                </div>
              </a>
            </div>

            <motion.div 
              className="paws-decoration"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FaPaw className="paw-1" />
              <FaPaw className="paw-2" />
              <FaPaw className="paw-3" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
