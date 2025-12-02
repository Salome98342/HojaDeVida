import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  // Habilidades técnicas hardcodeadas
  const technicalSkills = [
    // Frontend & Diseño
    { id: 1, name: 'HTML & CSS', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { id: 2, name: 'Animaciones CSS', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { id: 3, name: 'JavaScript', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { id: 4, name: 'React', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    
    // Backend
    { id: 5, name: 'Node.js', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { id: 6, name: 'Django', level: 'Básico/Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    
    // Bases de datos
    { id: 7, name: 'PostgreSQL', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { id: 8, name: 'Modelado de BD', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    
    // Lenguajes
    { id: 9, name: 'Python', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { id: 10, name: 'C', level: 'Básico', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    
    // Herramientas
    { id: 11, name: 'Git', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { id: 12, name: 'Diseño UI', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { id: 13, name: 'Diagramación UML', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unifiedmodelinglanguage/unifiedmodelinglanguage-original.svg' },
    { id: 14, name: 'APIs', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { id: 15, name: 'CRUDs', level: 'Avanzado', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { id: 16, name: 'Dashboards', level: 'Intermedio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  ];

  // Habilidades blandas
  const softSkills = [
    { id: 1, name: 'Comunicación asertiva', icon: '💬' },
    { id: 2, name: 'Empatía y acompañamiento', icon: '🤝' },
    { id: 3, name: 'Resolución de problemas', icon: '🧩' },
    { id: 4, name: 'Adaptabilidad', icon: '🔄' },
    { id: 5, name: 'Organización', icon: '📋' },
    { id: 6, name: 'Aprendizaje continuo', icon: '📚' },
    { id: 7, name: 'Trabajo en equipo', icon: '👥' },
    { id: 8, name: 'Creatividad', icon: '✨' },
  ];

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
        {/* Habilidades Técnicas */}
        <motion.div
          className="section-header-modern"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title-modern">
            <span className="title-accent">Stack</span>
            <span className="title-main">Tecnológico</span>
          </h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {technicalSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="skill-icon-container">
                <motion.img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="skill-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <span className="skill-level-badge">{skill.level}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Habilidades Blandas */}
        <motion.div
          className="section-header-modern"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title-modern soft-skills-title">
            <span className="title-accent">Soft</span>
            <span className="title-main">Skills</span>
          </h2>
        </motion.div>

        <motion.div
          className="soft-skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="soft-skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="soft-skill-icon"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.05 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="soft-skill-name">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
