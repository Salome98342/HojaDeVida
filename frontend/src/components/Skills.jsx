import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { skillsAPI } from '../services/api';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await skillsAPI.getAll();
      setSkills(response.data.data || []);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching skills:', err);
      setLoading(false);
    }
  };

  const defaultSkills = [
    { id: 1, name: 'React', category: 'Frontend', level: 90 },
    { id: 2, name: 'Node.js', category: 'Backend', level: 85 },
    { id: 3, name: 'JavaScript', category: 'Programming', level: 95 },
    { id: 4, name: 'CSS/SCSS', category: 'Frontend', level: 88 },
    { id: 5, name: 'SQL', category: 'Database', level: 80 },
  ];

  const displaySkills = skills.length > 0 ? skills : defaultSkills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        {loading ? (
          <div className="loading">Loading skills...</div>
        ) : (
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {displaySkills.map((skill) => (
              <motion.div
                key={skill.id}
                className="skill-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="skill-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  {skill.category && (
                    <span className="skill-category">{skill.category}</span>
                  )}
                </div>
                {skill.level !== undefined && (
                  <div className="skill-level">
                    <div className="level-bar">
                      <motion.div
                        className="level-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                    <span className="level-text">{skill.level}%</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
