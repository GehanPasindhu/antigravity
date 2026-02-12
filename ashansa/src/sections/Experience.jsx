import React from 'react';
import '../styles/Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: "Founder & Content Director",
      company: "Tutora Education Pro, Colombo",
      period: "Oct 2023 - Present",
      description: [
        "Research and create scientific educational content for young learners.",
        "Manage social media presence and content posting order to educate students about scientific topics."
      ]
    },
    {
      role: "Sales & Marketing Agent",
      company: "Vision Islands International, Colombo",
      period: "March 2023 - August 2023",
      description: [
        "Provided technical support, operation & entry of system data.",
        "Managed client affairs, trading assets, and billing."
      ]
    },
    {
      role: "Biomedical Technical Officer",
      company: "LEAATAS, Sri Lanka",
      period: "November 2022 - April 2023",
      description: [
        "Provided technical support, operated, and repaired machines.",
        "Lectured and trained students and participants on andrological analysis in the lab.",
        "Managed client affairs, hospital orders, and billing."
      ]
    },
    {
      role: "Trainee Medical Laboratory Technologist (International)",
      company: "Neville Fernando Teaching Hospital",
      period: "January 2021 - July 2021",
      description: [
        "Gained insights into medical laboratory techniques, equipment handling, and sample analysis.",
        "Practiced phlebotomy techniques and sample withdrawal.",
        "Conducted biochemical analysis and adhered to quality assurance standards."
      ]
    },
    {
      role: "Client Center Agent",
      company: "Big Bad Wolf, Sri Lanka",
      period: "September 2020 - December 2020",
      description: [
        "Handled customer inquiries and coordinated book package delivery.",
        "Cross-checked package locations and due dates in the system."
      ]
    },
    {
      role: "Client Center Executive",
      company: "Standard Chartered Bank, Sri Lanka",
      period: "September 2020 - December 2020",
      description: [
        "Marketed and promoted the benefits of credit/debit cards to clients.",
        "Communicated company benefits and offers to clients."
      ]
    },
    {
      role: "Martial Arts Coach",
      company: "SAITM, Sri Lanka",
      period: "2016 - 2017",
      description: [
        "Trained students in Karate martial arts techniques."
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">{exp.period}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <ul className="timeline-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
