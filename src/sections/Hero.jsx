import '../styles/Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background Elements */}
      <div className="hero-bg-grid"></div>
      <div className="hero-bg-glow"></div>
      
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Content - 60% */}
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, x: -100, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
            
              <h1 className="hero-title">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Hi, I'm <br/>
                </motion.span>
                <motion.span 
                  className="gradient-text"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.4,
                    type: "spring",
                    stiffness: 120
                  }}
                >
                  Ama Ashansa Gomes
                </motion.span>
              </h1>
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                A passionate <span className="highlight">Biotechnologist</span> and <span className="highlight">Researcher</span> dedicated to advancing scientific innovation through cutting-edge research and analytical expertise.
              </motion.p>
          
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
