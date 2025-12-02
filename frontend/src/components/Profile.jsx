import { motion } from 'framer-motion';
import './Profile.css';

const Profile = () => {
  // Datos hardcodeados de Salomé
  const profile = {
    name: 'Salomé Rodríguez Moscoso',
    title: 'Tecnóloga en Desarrollo de Software',
    bio: 'Estudiante apasionada por el desarrollo de software, con interés en el desarrollo web, bases de datos y creación de soluciones tecnológicas que aporten valor real. Me caracterizo por mi compromiso, capacidad de aprendizaje y habilidades para el acompañamiento académico y socioeducativo. Me motiva seguir creciendo profesionalmente mediante trabajo colaborativo, creatividad y aplicación de buenas prácticas de programación.',
    email: 'salomerodriguezmoscoso@gmail.com',
    location: 'Caicedonia, Valle del Cauca - Colombia',
    phone: '+57 321 868 7856',
    github: 'https://github.com/Salome98342',
    linkedin: 'https://linkedin.com/in/salome-rodriguez-moscoso-ab293a381',
    portfolio: 'https://atom.bio/clownmm',
  };

  return (
    <section className="profile-section" id="profile">
      <div className="container">
        <motion.div
          className="profile-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="profile-avatar"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <div className="avatar-placeholder">
              {profile.name.charAt(0)}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="profile-name"
          >
            {profile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="profile-title"
          >
            {profile.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="profile-bio"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            className="profile-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="info-item">
              <span className="icon">📧</span>
              <span>{profile.email}</span>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <span>{profile.phone}</span>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <span>{profile.location}</span>
            </div>
          </motion.div>

          <motion.div
            className="profile-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            )}
            {profile.portfolio && (
              <a href={profile.portfolio} target="_blank" rel="noopener noreferrer" className="social-link">
                Portafolio de Arte
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
