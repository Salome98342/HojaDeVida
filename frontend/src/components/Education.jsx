import { motion } from 'framer-motion';
import './Education.css';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Tecnología en Desarrollo de Software",
      institution: "Universidad del Valle",
      period: "2023 - Presente",
      location: "Caicedonia, Valle del Cauca",
      description: "Enfoque en desarrollo web, bases de datos, ingeniería de software, teoría general de sistemas e impactos ambientales de la tecnología.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      status: "En curso"
    },
    {
      id: 2,
      degree: "Bachiller Técnico en Agroindustria Alimentaria",
      institution: "Institución Educativa Bolivariano",
      period: "Graduada",
      location: "Caicedonia, Valle del Cauca",
      description: "Formación en procesos productivos e industriales del sector alimentario.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      status: "Completado"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="education-section" id="education">
      <div className="container">
        <motion.div
          className="section-header-modern"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title-modern">
            <span className="title-accent">Mi</span>
            <span className="title-main">Educación</span>
          </h2>
        </motion.div>

        <motion.div
          className="education-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="education-item"
              variants={itemVariants}
              whileHover={{ x: 10, scale: 1.02 }}
            >
              <div className="education-icon">
                <img src={edu.icon} alt={edu.degree} />
                <div className="status-badge" data-status={edu.status}>
                  {edu.status}
                </div>
              </div>
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <h4 className="education-institution">{edu.institution}</h4>
                <div className="education-meta">
                  <span className="education-period">📅 {edu.period}</span>
                  <span className="education-location">📍 {edu.location}</span>
                </div>
                <p className="education-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
