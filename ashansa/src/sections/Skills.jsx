import React from 'react';
import '../styles/Skills.css';
import { motion } from 'framer-motion';
import { FaDna, FaMicroscope, FaVial, FaNotesMedical, FaChartLine, FaUsers, FaLaptopMedical } from 'react-icons/fa';
import { GiChemicalDrop, GiMedicines, GiHealthPotion } from 'react-icons/gi';

const Skills = () => {
  const categories = [
    {
      title: "Core Sciences",
      skills: [
        { name: "Biotechnology", icon: <FaDna /> },
        { name: "Biochemistry", icon: <GiChemicalDrop /> },
        { name: "Microbiology", icon: <FaMicroscope /> },
        { name: "Pharmacology", icon: <GiMedicines /> },
        { name: "Immunology", icon: <GiHealthPotion /> },
        { name: "Parasitology", icon: <FaVial /> }
      ]
    },
    {
      title: "Laboratory Skills",
      skills: [
        { name: "Lab Techniques", icon: <FaMicroscope /> },
        { name: "Equipment Handling", icon: <FaVial /> },
        { name: "Phlebotomy", icon: <FaNotesMedical /> },
        { name: "Quality Assurance", icon: <FaChartLine /> },
        { name: "Infection Control", icon: <FaLaptopMedical /> }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Research & Analysis", icon: <FaChartLine /> },
        { name: "Communication", icon: <FaUsers /> },
        { name: "Leadership", icon: <FaUsers /> },
        { name: "Presentation", icon: <FaChartLine /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} className="skill-category" variants={itemVariants}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-icon">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
