import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaSpotify, FaSoundcloud, FaBandcamp } from 'react-icons/fa';

const SocialIcon = ({ icon, link, colorClass, index }) => (
  <motion.a href={link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }} whileHover={{ scale: 1.2, transition: { duration: 0.2 } }} whileTap={{ scale: 0.9 }} className={`text-4xl sm:text-5xl md:text-6xl transition-all duration-300 hover:glow-red ${colorClass}`}>
    {icon}
  </motion.a>
);

const Links = () => {
  const socialLinks = [
    { icon: <FaSpotify />, link: "https://open.spotify.com/artist/4DOKilPHgnYuXqq5VOVFSc?si=1F4F6TKOSH2NMpbRDV0_Fw", colorClass: "text-spotify" },
    { icon: <FaSoundcloud />, link: "https://soundcloud.com/archangeloficial/tracks", colorClass: "text-soundcloud" },
    { icon: <FaBandcamp />, link: "https://archangelll333.bandcamp.com", colorClass: "text-bandcamp" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/arch.angel.oficial/", colorClass: "text-instagram" },
  ];

  return (
    <motion.section 
      id="contact" 
      className="w-full max-w-5xl py-10 md:py-20 text-center mx-auto" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.6 }}
    >
      <h2 className="mb-12 text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase font-elegance">
        Open for Labels, Collabs and Bookings
      </h2>
      <div className="flex justify-center items-center space-x-6 sm:space-x-8 md:space-x-12">
        {socialLinks.map((item, index) => (
          <SocialIcon key={index} icon={item.icon} link={item.link} colorClass={item.colorClass} index={index} />
        ))}
      </div>
      {/* ========================================================= */}
      {/* A ÚNICA ALTERAÇÃO ESTÁ NESTA LINHA */}
      {/* ========================================================= */}
      <p className="mt-8 text-gray-300 text-lg italic tracking-widest uppercase">
        Follow me
      </p>
    </motion.section>
  );
};

export default Links;