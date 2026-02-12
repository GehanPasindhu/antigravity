import React from 'react';
import '../styles/Research.css';
import { motion } from 'framer-motion';
import { FaBook } from 'react-icons/fa';

const Research = () => {
  const researchPapers = [
    {
      title: "Standards of HEPA Filter Functioning Systems & Correlation of Hospital Surgical Theatre Mediated Infections (2021)",
      description: "Conducted a comprehensive literature review on USA and Sri Lankan techniques and standards for investigating the functioning of HEPA filter systems. The report focused on preventing hospital surgical theatre-mediated infections.",
      tags: ["Literature Review", "Microbiology", "Infection Control"],
      authors: "Ashansa Gomes, A. A. P. Keerthi"
    },
    {
      title: "Investigation of Phytochemical & Antimicrobial Properties of Extracts from the Wild Ginger Plant (Zingiber cylindricum) (2020)",
      description: "Utilized one-dimensional normal thin layer chromatography (TLC) to separate plant phytochemicals. Investigated antimicrobial properties against E. coli and Staphylococcus species.",
      tags: ["Phytochemistry", "Antimicrobial", "TLC", "Lab Research"],
      authors: "Ashansa Gomes, Sadin DeSilva"
    }
  ];

  return (
    <section id="research" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Research & Publications</h2>
        <div className="research-grid">
          {researchPapers.map((paper, index) => (
            <motion.div 
              key={index}
              className="research-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="research-icon-container">
                 <FaBook className="research-icon" />
              </div>
              <div className="research-content">
                <h3 className="research-title">{paper.title}</h3>
                <p className="research-author"><strong>Authors:</strong> {paper.authors}</p>
                <p className="research-description">{paper.description}</p>
                <div className="research-tags">
                  {paper.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
