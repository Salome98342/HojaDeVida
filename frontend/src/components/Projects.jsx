import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  // Proyectos hardcodeados de Salomé
  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión Académica',
      description: 'Sistema completo para gestión académica con módulos de RA (Resultado de Aprendizaje), IL (Indicador de Logro), registro de notas, retroalimentaciones y seguimiento estudiantil. Incluye dashboard administrativo y reportes.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Bootstrap'],
      github_url: 'https://github.com/Salome98342',
    },
    {
      id: 2,
      title: 'Sistema Tienda Escolar Maida\'s',
      description: 'Aplicación web para gestión de tienda escolar con módulos de ventas, sistema de créditos para estudiantes, inventario de productos, gestión de clientes y reportes de ventas.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express'],
      github_url: 'https://github.com/Salome98342',
    },
    {
      id: 3,
      title: 'Dashboard Interactivo',
      description: 'Dashboard moderno con visualización de datos en tiempo real, gráficos interactivos y panel de control para análisis de métricas académicas.',
      technologies: ['React', 'Chart.js', 'Tailwind CSS', 'Framer Motion'],
      github_url: 'https://github.com/Salome98342',
    },
    {
      id: 4,
      title: 'Actividades con Redes Neuronales',
      description: 'Proyecto de Machine Learning utilizando el dataset CIFAR-10 para clasificación de imágenes con redes neuronales convolucionales.',
      technologies: ['Python', 'TensorFlow', 'Jupyter Notebook'],
      github_url: 'https://github.com/Salome98342',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="projects-section" id="projects">
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
            <span className="title-main">Proyectos</span>
          </h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                    >
                      <span>Demo en Vivo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
