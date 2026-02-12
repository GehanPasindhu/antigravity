import React from 'react';
import '../styles/About.css';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="about-image-wrapper">
             <div className="about-image">
               <img src={profileImg} alt="Ama Ashansa" />
             </div>
          </div>
          
          <div className="about-details">
            <h2 className="section-title">About Me</h2>
            <div className="about-text">
              <p>
                I am an <strong>innovative and creative professional</strong> with a passion for Biotechnology, Biochemistry, Microbiology, and Scientific Research. Equipped with strong analytical, logical, and presentation skills, I thrive in environments where I can add value through scientific inquiry.
              </p>
              <p>
                My strengths include being work-oriented, self-motivated, and enthusiastic, with the ability to adapt to various environments. I have actively contributed to research and development in scientific areas, applying analytical mastery to solve complex problems and enhance project outcomes.
              </p>
              <p>
                With a <strong>B.Sc (Hons) in Biotechnology</strong> and a diploma in Pharmacy Management, I combine technical expertise in laboratory techniques with research methodologies to deliver impactful results.
              </p>
            </div>
            
           
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
