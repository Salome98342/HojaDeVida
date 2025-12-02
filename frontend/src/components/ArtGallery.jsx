import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ArtGallery.css';

const ArtGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'Todos', icon: '🎨' },
    { id: 'character-sheets', name: 'Character Sheets', icon: '👤' },
    { id: 'fanart', name: 'Fan Art', icon: '⭐' },
    { id: 'portraits', name: 'Retratos', icon: '🖼️' },
    { id: 'sketches', name: 'Bocetos', icon: '✏️' },
    { id: 'digital', name: 'Arte Digital', icon: '💻' }
  ];

  // INSTRUCCIONES: Reemplaza las URLs con tus propias imágenes
  // Las imágenes deben estar en: /images/art/{categoria}/{nombre-archivo}.jpg
  // Ejemplo: /images/art/character-sheets/design-1.jpg
  const artworks = [
    // Character Sheets - Guarda tus imágenes en /public/images/art/character-sheets/
    { id: 1, title: 'Character Design 1', category: 'character-sheets', image: '/images/art/character-sheets/design-1.jpg', description: 'Diseño de personaje original con referencias completas' },
    { id: 2, title: 'Character Design 2', category: 'character-sheets', image: '/images/art/character-sheets/design-2.jpg', description: 'Character sheet con expresiones y poses' },
    { id: 3, title: 'Character Design 3', category: 'character-sheets', image: '/images/art/character-sheets/design-3.jpg', description: 'Diseño de personaje fantasy' },
    
    // Fan Art - Guarda tus imágenes en /public/images/art/fanart/
    { id: 4, title: 'Fan Art 1', category: 'fanart', image: '/images/art/fanart/fanart-1.jpg', description: 'Ilustración de personaje de anime popular' },
    { id: 5, title: 'Fan Art 2', category: 'fanart', image: '/images/art/fanart/fanart-2.jpg', description: 'Fan art estilo manga' },
    { id: 6, title: 'Fan Art 3', category: 'fanart', image: '/images/art/fanart/fanart-3.jpg', description: 'Ilustración de videojuego' },
    
    // Retratos - Guarda tus imágenes en /public/images/art/portraits/
    { id: 7, title: 'Retrato Digital 1', category: 'portraits', image: '/images/art/portraits/portrait-1.jpg', description: 'Retrato digital con técnica de pintura' },
    { id: 8, title: 'Retrato Digital 2', category: 'portraits', image: '/images/art/portraits/portrait-2.jpg', description: 'Ilustración de retrato estilizado' },
    
    // Bocetos - Guarda tus imágenes en /public/images/art/sketches/
    { id: 9, title: 'Sketch 1', category: 'sketches', image: '/images/art/sketches/sketch-1.jpg', description: 'Boceto rápido a lápiz' },
    { id: 10, title: 'Sketch 2', category: 'sketches', image: '/images/art/sketches/sketch-2.jpg', description: 'Estudios de anatomía' },
    
    // Arte Digital - Guarda tus imágenes en /public/images/art/digital/
    { id: 11, title: 'Digital Art 1', category: 'digital', image: '/images/art/digital/digital-1.jpg', description: 'Composición abstracta digital' },
    { id: 12, title: 'Digital Art 2', category: 'digital', image: '/images/art/digital/digital-2.jpg', description: 'Ilustración digital completa' }
  ];

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section className="art-gallery-section" id="gallery">
      <div className="container">
        <motion.div
          className="section-header-modern"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title-modern">
            <span className="title-accent">Galería</span>
            <span className="title-main">de Arte</span>
          </h2>
          <p className="section-subtitle">Explora mi colección completa de ilustraciones</p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`filter-button ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="filter-icon">{cat.icon}</span>
              <span className="filter-name">{cat.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="gallery-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
        >
          {filteredArtworks.map((art) => (
            <motion.div
              key={art.id}
              className="gallery-item"
              variants={itemVariants}
              layoutId={`gallery-${art.id}`}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(art)}
            >
              <div className="gallery-image-wrapper">
                <img src={art.image} alt={art.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{art.title}</h3>
                  <p className="gallery-description">{art.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <>
              <motion.div
                className="lightbox-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedImage(null)}
              />
              <motion.div
                className="lightbox-content"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
                <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-image" />
                <div className="lightbox-info">
                  <h3>{selectedImage.title}</h3>
                  <p>{selectedImage.description}</p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ArtGallery;
