import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ArtPortfolio.css';

const ArtPortfolio = ({ onShowGallery, onShowCommissions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const artworks = [
    {
      id: 1,
      title: "Digital Portrait",
      category: "Digital Art",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
      description: "Ilustración digital creada con técnicas de pintura digital"
    },
    {
      id: 2,
      title: "Character Design",
      category: "Concept Art",
      image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
      description: "Diseño de personajes originales con estilo anime/manga"
    },
    {
      id: 3,
      title: "Fantasy Landscape",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
      description: "Paisajes fantásticos con atmósfera mística"
    },
    {
      id: 4,
      title: "Abstract Composition",
      category: "Abstract",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
      description: "Composiciones abstractas con colores vibrantes"
    },
    {
      id: 5,
      title: "Traditional Sketch",
      category: "Traditional",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      description: "Bocetos tradicionales con lápiz y tinta"
    }
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = artworks.length - 1;
      if (nextIndex >= artworks.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="art-portfolio-section" id="art">
      <div className="container">
        <motion.div
          className="section-header-art"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title-art">
            <span className="title-accent">Portafolio</span>
            <span className="title-main">de Arte</span>
          </h2>
          <p className="section-subtitle">Explora mi colección de ilustraciones digitales y tradicionales</p>
        </motion.div>

        <div className="carousel-container">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.4 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="carousel-card"
            >
              <div className="artwork-image-container">
                <img 
                  src={artworks[currentIndex].image} 
                  alt={artworks[currentIndex].title}
                  className="artwork-image"
                />
                <div className="artwork-overlay">
                  <motion.div
                    className="artwork-info"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="artwork-category">{artworks[currentIndex].category}</span>
                    <h3 className="artwork-title">{artworks[currentIndex].title}</h3>
                    <p className="artwork-description">{artworks[currentIndex].description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            className="carousel-button prev" 
            onClick={() => paginate(-1)}
            aria-label="Previous artwork"
          >
            ‹
          </button>
          <button 
            className="carousel-button next" 
            onClick={() => paginate(1)}
            aria-label="Next artwork"
          >
            ›
          </button>

          <div className="carousel-indicators">
            {artworks.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="portfolio-actions"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <button 
            onClick={() => {
              onShowGallery();
              setTimeout(() => {
                document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="action-button primary"
          >
            Ver Galería Completa
            <span className="link-arrow">→</span>
          </button>
          <button 
            onClick={() => {
              onShowCommissions();
              setTimeout(() => {
                document.getElementById('commissions')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="action-button secondary"
          >
            Solicitar Comisión
            <span className="commission-icon">✨</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtPortfolio;
