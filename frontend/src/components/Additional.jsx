import { motion } from 'framer-motion';
import './Additional.css';

const Additional = () => {
  const languages = [
    { id: 1, name: 'Español', level: 'Nativo', flag: '🇪🇸', proficiency: 100 },
    { id: 2, name: 'Inglés', level: 'Intermedio', flag: '🇬🇧', proficiency: 65 }
  ];

  const interests = [
    {
      id: 1,
      icon: '🎨',
      title: 'Dibujo',
      description: 'El dibujo inspira mi creatividad'
    },
    {
      id: 2,
      icon: '🎵',
      title: 'Música',
      description: 'Fortalece mi interés por el diseño'
    },
    {
      id: 3,
      icon: '🎮',
      title: 'Videojuegos',
      description: 'Sistemas interactivos'
    },
    {
      id: 4,
      icon: '🔬',
      title: 'Experimentación',
      description: 'Artística y tecnológica'
    }
  ];

  const hobbies = [
    { id: 1, icon: '🖌️', name: 'Dibujo digital y tradicional' },
    { id: 2, icon: '🎼', name: 'Música' },
    { id: 3, icon: '🎮', name: 'Videojuegos' },
    { id: 4, icon: '💻', name: 'Proyectos personales' },
    { id: 5, icon: '✍️', name: 'Escritura creativa' },
    { id: 6, icon: '🎨', name: 'Diseño visual' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section className="additional-section" id="additional">
      <div className="container">
        {/* Idiomas */}
        <motion.div
          className="additional-subsection"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header-modern">
            <h2 className="section-title-modern">
              <span className="title-accent">Mis</span>
              <span className="title-main">Idiomas</span>
            </h2>
          </div>
          <motion.div
            className="languages-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {languages.map((lang) => (
              <motion.div
                key={lang.id}
                className="language-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="language-flag">{lang.flag}</div>
                <h3 className="language-name">{lang.name}</h3>
                <span className="language-level">{lang.level}</span>
                <div className="proficiency-bar">
                  <motion.div
                    className="proficiency-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Intereses */}
        <motion.div
          className="additional-subsection"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="section-header-modern">
            <h2 className="section-title-modern">
              <span className="title-accent">Mis</span>
              <span className="title-main">Intereses</span>
            </h2>
          </div>
          <motion.p className="interests-intro">
            Me apasiona el dibujo, la música y los videojuegos, actividades que inspiran mi creatividad 
            y fortalecen mi interés por el diseño y la programación de sistemas interactivos. 
            También disfruto la experimentación artística y tecnológica.
          </motion.p>
          <motion.div
            className="interests-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {interests.map((interest) => (
              <motion.div
                key={interest.id}
                className="interest-card"
                variants={itemVariants}
                whileHover={{ scale: 1.08, rotate: 2 }}
              >
                <motion.div
                  className="interest-icon"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {interest.icon}
                </motion.div>
                <h3 className="interest-title">{interest.title}</h3>
                <p className="interest-description">{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          className="additional-subsection"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="section-header-modern">
            <h2 className="section-title-modern">
              <span className="title-accent">Mis</span>
              <span className="title-main">Hobbies</span>
            </h2>
          </div>
          <motion.div
            className="hobbies-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {hobbies.map((hobby) => (
              <motion.div
                key={hobby.id}
                className="hobby-tag"
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hobby-icon">{hobby.icon}</span>
                <span className="hobby-name">{hobby.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Additional;
