import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

import galleryImg1 from '/images/gallery-1.jpg';
import galleryImg3 from '/images/gallery-3.png';
import galleryImg4 from '/images/gallery-4.png';

const Gallery = ({ isMobile, content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [galleryImg1, galleryImg3, galleryImg4];
  const videoSrc = '/videos/performance.mp4';

  return (
    <>
      <motion.section 
        id="gallery" 
        ref={ref}
        className="w-full max-w-6xl py-10 md:py-20 flex flex-col items-center px-4 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <h2 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase font-elegance">
          {content.title}
        </h2>
        <motion.div
          className="relative w-full p-4 sm:p-6 border border-gray-800 rounded-2xl overflow-hidden"
          animate={!isMobile && isInView ? {
            boxShadow: [
              "0 0 15px 0px rgba(185, 28, 28, 0.2)",
              "0 0 30px 5px rgba(185, 28, 28, 0.4)",
              "0 0 15px 0px rgba(185, 28, 28, 0.2)",
            ],
          } : { boxShadow: "0 0 15px 0px rgba(185, 28, 28, 0.2)" }}
          transition={{
            duration: 2.2,
            repeat: isInView ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
            <source src="/box-background.mp4" type="video/mp4" />
          </video>
          
          <div className="absolute inset-0 bg-black/80 z-10"></div>
          <div className="relative z-20 flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              {images.map((src, index) => (
                <motion.div 
                  key={index} 
                  className="aspect-square overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={src} 
                    alt={`Imagem da galeria do artista ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <div className="w-full aspect-video overflow-hidden rounded-lg bg-black">
              <video 
                controls
                playsInline 
                src={videoSrc} 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={selectedImage} 
                alt="Visualização expandida"
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <motion.button
                className="absolute -top-4 -right-4 bg-black rounded-full text-white text-2xl w-10 h-10 flex items-center justify-center border border-gray-700"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
              >
                &times;
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

Gallery.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  content: PropTypes.object.isRequired,
};

export default Gallery;