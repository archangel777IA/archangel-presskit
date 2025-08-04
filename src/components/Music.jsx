import React from 'react';
import { motion } from 'framer-motion';

const PlayerSection = ({ title, platformLink, platformName, linkColorClass, titleColorClass, linkGlowClass, children }) => (
  <div className="w-full mb-12 last:mb-0 text-center">
    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleColorClass}`}>{title}</h3>
    <div>{children}</div>
    <div className="mt-4">
      <motion.a 
        href={platformLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`inline-block px-5 py-2 text-xs font-semibold border border-gray-700 bg-black/30 text-gray-400 rounded-lg transition-all duration-300 ${linkColorClass} ${linkGlowClass}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver no {platformName} →
      </motion.a>
    </div>
  </div>
);

const Music = () => {
  return (
    <motion.section 
      id="music" 
      className="w-full max-w-2xl py-10 md:py-20 flex flex-col items-center px-4 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.4 }}
    >
      <h2 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase font-elegance">
        Ouça
      </h2>

      <motion.div
        className="relative w-full p-4 sm:p-6 border border-gray-800 rounded-2xl bg-psy-texture bg-cover bg-center overflow-hidden"
        animate={{
          boxShadow: [
            "0 0 15px 0px rgba(185, 28, 28, 0.2)",
            "0 0 30px 5px rgba(185, 28, 28, 0.4)",
            "0 0 15px 0px rgba(185, 28, 28, 0.2)",
          ],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/box-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        
        <div className="relative z-20">
          <PlayerSection 
            title="SoundCloud" 
            platformLink="https://soundcloud.com/archangeloficial"
            platformName="SoundCloud"
            linkColorClass="hover:text-[#ff5500]"
            titleColorClass="text-[#ff5500]"
            linkGlowClass="hover:shadow-[0_0_15px_rgba(255,85,0,0.5)]"
          >
            <iframe 
                title="SoundCloud Player - OBSIDIAN 140"
                width="100%" 
                height="300" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2141486007&color=%23141414&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
          </PlayerSection>

          <PlayerSection 
            title="Spotify" 
            platformLink="https://open.spotify.com/artist/4DOKilPHgnYuXqq5VOVFSc" 
            platformName="Spotify"
            linkColorClass="hover:text-[#1DB954]"
            titleColorClass="text-[#1DB954]"
            linkGlowClass="hover:shadow-[0_0_15px_rgba(29,185,84,0.5)]"
          >
            <iframe title="Spotify Player" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/artist/4DOKilPHgnYuXqq5VOVFSc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" ></iframe>
          </PlayerSection>

          <PlayerSection 
            title="Bandcamp" 
            platformLink="https://archangelll333.bandcamp.com/track/work-light-original-mix-135-d" 
            platformName="Bandcamp"
            linkColorClass="hover:text-[#629aa9]"
            titleColorClass="text-[#629aa9]"
            linkGlowClass="hover:shadow-[0_0_15px_rgba(98,154,169,0.5)]"
          >
            <iframe title="Bandcamp Player" style={{ border: 0, width: '100%', height: '120px' }} src="https://bandcamp.com/EmbeddedPlayer/track=3424674687/size=large/bgcol=212121/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
          </PlayerSection>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Music;