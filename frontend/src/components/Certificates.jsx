import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Certificates.css';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Full-Stack Empresarial Spring y Angular",
      issuer: "DevSeniorCode",
      date: "2025",
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      image: "/images/certificates/fullstack-spring-angular.jpg",
      description: "Certificación en desarrollo Full Stack con Spring Framework y Angular. Construcción de aplicaciones empresariales con arquitectura REST, gestión de bases de datos, autenticación JWT y despliegue en producción.",
      skills: ["Spring Boot", "Angular", "Java", "TypeScript", "REST API"],
      hours: "6 horas",
      credential: "DSC-SPRING-ANGULAR-2024"
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="certificates-section" id="certificates">
      <div className="container">
        <motion.div
          className="section-header-modern"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title-modern">
            <span className="title-accent">Mis</span>
            <span className="title-main">Certificaciones</span>
          </h2>
        </motion.div>

        <motion.div 
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="certificate-card"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedCert(cert)}
              layoutId={`cert-${cert.id}`}
            >
              <div className="cert-image-container">
                <img src={cert.thumbnail} alt={cert.title} className="cert-image" />
                <div className="cert-overlay">
                  <span className="cert-view">Ver detalles</span>
                </div>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-meta">
                  <span className="cert-date">{cert.date}</span>
                  {cert.hours && <span className="cert-hours">⏱️ {cert.hours}</span>}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <>
            <motion.div
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            />
            <motion.div
              className="modal-content"
              layoutId={`cert-${selectedCert.id}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className="modal-close" onClick={() => setSelectedCert(null)}>×</button>
              <img src={selectedCert.image} alt={selectedCert.title} className="modal-image" />
              <div className="modal-info">
                <h3>{selectedCert.title}</h3>
                <p className="modal-issuer">{selectedCert.issuer}</p>
                <div className="modal-meta">
                  <span className="modal-date">📅 {selectedCert.date}</span>
                  {selectedCert.hours && <span className="modal-hours">⏱️ {selectedCert.hours} horas</span>}
                </div>
                <p className="modal-description">{selectedCert.description}</p>
                {selectedCert.skills && (
                  <div className="modal-skills">
                    <h4>Habilidades Desarrolladas:</h4>
                    <div className="skills-tags">
                      {selectedCert.skills.map((skill, index) => (
                        <motion.span 
                          key={index}
                          className="skill-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
                {selectedCert.credential && (
                  <div className="modal-credential">
                    <span>🏆 Credencial: <code>{selectedCert.credential}</code></span>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Certificates;
