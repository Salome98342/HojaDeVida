import { motion } from 'framer-motion';
import { useState } from 'react';
import { contactAPI } from '../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await contactAPI.submit(formData);
      setStatus({
        type: 'success',
        message: '¡Gracias! Tu mensaje ha sido enviado exitosamente.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Error al enviar el mensaje. Por favor intenta de nuevo.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contacto
        </motion.h2>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-info">
            <h3>Conectemos</h3>
            <p>
              Siempre estoy abierta a discutir nuevos proyectos, ideas creativas u
              oportunidades para colaborar y aprender.
            </p>
            <div className="info-items">
              <motion.div
                className="info-card"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>salomerodriguezmoscoso@gmail.com</p>
                </div>
              </motion.div>
              <motion.div
                className="info-card"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <span className="info-icon">📍</span>
                <div>
                  <h4>Ubicación</h4>
                  <p>Colombia</p>
                </div>
              </motion.div>
              <motion.div
                className="info-card"
                whileHover={{ scale: 1.05, x: 10 }}
              >
                <span className="info-icon">💼</span>
                <div>
                  <h4>GitHub</h4>
                  <p>github.com/Salome98342</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu.correo@ejemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="¿De qué se trata?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tu mensaje..."
              />
            </div>

            {status.message && (
              <motion.div
                className={`status-message ${status.type}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {status.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Enviando...' : 'Enviar Mensaje'}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
