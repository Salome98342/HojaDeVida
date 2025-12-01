import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { profileAPI } from '../services/api';
import './Profile.css';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await profileAPI.get();
      setProfile(response.data.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="profile-section">
        <div className="loading">Loading profile...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="profile-section">
        <div className="error">
          <p>Unable to load profile. Please make sure the backend is running and configured.</p>
          <p className="error-detail">{error}</p>
        </div>
      </section>
    );
  }

  const defaultProfile = {
    name: 'Your Name',
    title: 'Your Professional Title',
    bio: 'Your bio will appear here. Configure your Supabase database and add your information.',
    email: 'your.email@example.com',
    location: 'Your Location',
  };

  const displayProfile = profile || defaultProfile;

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
            {displayProfile.avatar_url ? (
              <img src={displayProfile.avatar_url} alt={displayProfile.name} />
            ) : (
              <div className="avatar-placeholder">
                {displayProfile.name.charAt(0)}
              </div>
            )}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="profile-name"
          >
            {displayProfile.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="profile-title"
          >
            {displayProfile.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="profile-bio"
          >
            {displayProfile.bio}
          </motion.p>

          <motion.div
            className="profile-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {displayProfile.email && (
              <div className="info-item">
                <span className="icon">📧</span>
                <span>{displayProfile.email}</span>
              </div>
            )}
            {displayProfile.location && (
              <div className="info-item">
                <span className="icon">📍</span>
                <span>{displayProfile.location}</span>
              </div>
            )}
          </motion.div>

          <motion.div
            className="profile-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {displayProfile.linkedin && (
              <a href={displayProfile.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn
              </a>
            )}
            {displayProfile.github && (
              <a href={displayProfile.github} target="_blank" rel="noopener noreferrer" className="social-link">
                GitHub
              </a>
            )}
            {displayProfile.website && (
              <a href={displayProfile.website} target="_blank" rel="noopener noreferrer" className="social-link">
                Website
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
