import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const TextBox = ({ isMobile, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className="relative p-8 border border-gray-800 rounded-2xl overflow-hidden flex flex-col"
      animate={!isMobile && isInView ? { boxShadow: [ "0 0 15px 0px rgba(185, 28, 28, 0.2)", "0 0 30px 5px rgba(185, 28, 28, 0.4)", "0 0 15px 0px rgba(185, 28, 28, 0.2)", ], } : { boxShadow: "0 0 15px 0px rgba(185, 28, 28, 0.2)" }}
      transition={{ duration: 2.2, repeat: isInView ? Infinity : 0, ease: "easeInOut" }}
    >
      {/* ========================================================= */}
      {/* A ÚNICA ALTERAÇÃO ESTÁ AQUI: RENDERIZAÇÃO INCONDICIONAL DO VÍDEO */}
      {/* ========================================================= */}
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/box-background.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/60 rounded-2xl z-10"></div>
      <div className="relative z-20 flex flex-col flex-grow">
        {children}
      </div>
    </motion.div>
  );
};

TextBox.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default TextBox;