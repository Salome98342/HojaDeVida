import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { projectsAPI } from '../services/api';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await projectsAPI.getAll();
      setProjects(response.data.data || []);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setLoading(false);
    }
  };

  const defaultProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product catalog, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github_url: 'https://github.com/example/ecommerce',
      demo_url: 'https://example-ecommerce.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
      github_url: 'https://github.com/example/task-manager',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with interactive maps and forecasts.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      demo_url: 'https://example-weather.com',
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

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
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : (
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {displayProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                {project.image_url && (
                  <div className="project-image">
                    <img src={project.image_url} alt={project.title} />
                  </div>
                )}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {project.technologies && (
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  
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
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
