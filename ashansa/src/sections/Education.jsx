import React from 'react';
import '../styles/Education.css';
import { motion } from 'framer-motion';

const Education = () => {
  const degrees = [
    {
      degree: "B.Sc. (Hons) in Biotechnology",
      university: "Horizon University / NILAI University Malaysia",
      year: "2017 Sep - 2021 Dec (120 Credits)"
    },
    {
      degree: "Diploma in Pharmacy Management & Practice",
      university: "Aquinas College of Higher Studies, Colombo",
      year: "2024 Sept - 2025 Aug"
    }
  ];

  const certifications = [
    {
      name: "Certificate Course in Infection Prevention and Control",
      issuer: "Alison Online Academic Platform",
      year: "2024 Oct"
    },
    {
      name: "Certificate Course in Clinical Human Anatomy",
      issuer: "AOI, Colombo",
      year: "2022 Oct"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="education-layout">
          <div className="edu-section">
             <h3 className="column-title">Academic Qualifications</h3>
             <div className="education-grid">
              {degrees.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="education-card degree-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="degree-title">{edu.degree}</h4>
                  <p className="university-name">{edu.university}</p>
                  <span className="graduation-year">{edu.year}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="edu-section">
             <h3 className="column-title">Certifications</h3>
             <div className="education-grid">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="education-card cert-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="degree-title">{cert.name}</h4>
                  <p className="university-name">{cert.issuer}</p>
                  <span className="graduation-year">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
