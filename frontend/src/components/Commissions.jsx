import { useState } from 'react';
import { motion } from 'framer-motion';
import { commissionsAPI } from '../services/api';
import './Commissions.css';

const Commissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    commissionType: 'character-sheet',
    description: '',
    reference: '',
    budget: '',
    deadline: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const commissionTypes = [
    { id: 'character-sheet', name: 'Character Sheet', price: 'Desde $50', icon: '👤', description: 'Diseño completo de personaje con vistas múltiples' },
    { id: 'fanart', name: 'Fan Art', price: 'Desde $30', icon: '⭐', description: 'Ilustración de tu personaje favorito' },
    { id: 'portrait', name: 'Retrato Digital', price: 'Desde $40', icon: '🖼️', description: 'Retrato digital personalizado' },
    { id: 'fullbody', name: 'Cuerpo Completo', price: 'Desde $60', icon: '🎨', description: 'Ilustración de cuerpo completo con fondo' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await commissionsAPI.submit({
        name: formData.name,
        email: formData.email,
        commissionType: formData.commissionType,
        description: formData.description,
        references: formData.reference,
        budget: formData.budget || null,
        deadline: formData.deadline || null
      });

      console.log('Commission created:', response.data);
      setSubmitted(true);
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        commissionType: 'character-sheet',
        description: '',
        reference: '',
        budget: '',
        deadline: ''
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Error al enviar solicitud:', err);
      setError(err.response?.data?.error || 'Error al enviar la solicitud. Por favor intenta de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="commissions-section" id="commissions">
      <div className="container">
        <motion.div
          className="section-header-modern"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title-modern">
            <span className="title-accent">Solicita</span>
            <span className="title-main">una Comisión</span>
          </h2>
          <p className="section-subtitle">Haz realidad tu idea con una ilustración personalizada</p>
        </motion.div>

        <div className="commissions-content">
          {/* Commission Types */}
          <motion.div
            className="commission-types"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="types-title">Tipos de Comisiones</h3>
            <div className="types-grid">
              {commissionTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  className={`type-card ${formData.commissionType === type.id ? 'selected' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  onClick={() => setFormData({ ...formData, commissionType: type.id })}
                >
                  <div className="type-icon">{type.icon}</div>
                  <h4 className="type-name">{type.name}</h4>
                  <p className="type-price">{type.price}</p>
                  <p className="type-description">{type.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="commission-info">
              <h4>📋 Información Importante</h4>
              <ul>
                <li>✅ Los precios son aproximados y pueden variar según la complejidad</li>
                <li>⏱️ Tiempo de entrega: 1-3 semanas</li>
                <li>🔄 Incluye hasta 3 revisiones</li>
                <li>📧 Recibirás actualizaciones durante el proceso</li>
                <li>💳 50% anticipo, 50% al finalizar</li>
              </ul>
            </div>

            {/* Cat Motivation Card */}
            <motion.div
              className="cat-motivation-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="cat-image-container">
                <img 
                  src="/images/cat/mi-gato.jpg" 
                  alt="Mi gato autista" 
                  className="cat-image"
                />
              </div>
              <div className="cat-text">
                <p className="cat-message">
                  🐱 Si compras alguna comisión todo ese dinero se irá en este gato autista
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Commission Form */}
          <motion.div
            className="commission-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <form className="commission-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo *</label>
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
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="commissionType">Tipo de Comisión *</label>
                <select
                  id="commissionType"
                  name="commissionType"
                  value={formData.commissionType}
                  onChange={handleChange}
                  required
                >
                  {commissionTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name} - {type.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Descripción del Proyecto *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Describe tu idea: personaje, estilo, colores, poses, etc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="reference">Referencias (URLs o descripciones)</label>
                <textarea
                  id="reference"
                  name="reference"
                  value={formData.reference}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enlaces a imágenes de referencia o descripciones detalladas"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="budget">Presupuesto (USD)</label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Ej: 50"
                    min="0"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="deadline">Fecha Límite</label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                <span>{isLoading ? 'Enviando...' : 'Enviar Solicitud'}</span>
                <span className="submit-icon">{isLoading ? '⏳' : '✨'}</span>
              </motion.button>

              {error && (
                <motion.div
                  className="error-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ❌ {error}
                </motion.div>
              )}

              {submitted && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  ✅ ¡Solicitud enviada! Te contactaré pronto.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Commissions;
