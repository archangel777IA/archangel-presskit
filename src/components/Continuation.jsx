import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import TextBox from './TextBox';
import { FaWhatsapp } from 'react-icons/fa';

const Continuation = ({ isMobile, content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      id="continuation"
      ref={ref}
      className="w-full max-w-4xl py-10 md:py-20 flex flex-col items-center px-4 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.0 }}
    >
      <h2 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase font-elegance">
        {content.title}
      </h2>
      <TextBox isMobile={isMobile}>
        <div className="text-center space-y-4 text-gray-300 text-lg">
          <p>{content.p1}</p>
          <p>{content.p2}</p>
        </div>
        <div className="mt-8 flex justify-center">
          <motion.a 
            href="https://wa.me/5511997429410" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-x-3 px-6 py-3 text-sm font-semibold border border-gray-700 text-gray-300 rounded-lg transition-all duration-300 hover:bg-green-600/20 hover:text-white hover:border-green-500 hover:shadow-[0_0_15px_rgba(37,211,102,0.5)]" 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="text-xl" />
            <span>{content.button}</span>
          </motion.a>
        </div>
      </TextBox>
    </motion.section>
  );
};

Continuation.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  content: PropTypes.object.isRequired,
};

export default Continuation;