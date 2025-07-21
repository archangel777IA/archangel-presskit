import React, { useState } from 'react'; // <-- LINHA CORRIGIDA
import { motion } from 'framer-motion';

const PlayerSection = ({ title, platformLink, platformName, linkColorClass, titleColorClass, onInteraction, children }) => (
  <div className="w-full mb-12 last:mb-0 text-center" onPointerDown={onInteraction}>
    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleColorClass}`}>{title}</h3>
    <div>{children}</div>
    <div className="mt-4">
      <motion.a 
        href={platformLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`inline-block px-5 py-2 text-xs font-semibold border border-gray-800 bg-black/30 text-gray-400 rounded-lg transition-all duration-300 ${linkColorClass} hover:shadow-[0_0_15px]`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver no {platformName} →
      </motion.a>
    </div>
  </div>
);

const Music = () => {
  const [playerKeys, setPlayerKeys] = useState({
    soundcloud: 1,
    spotify: 1,
    bandcamp: 1,
  });

  const handleInteraction = (activePlayer) => {
    setPlayerKeys(prevKeys => ({
      soundcloud: activePlayer !== 'soundcloud' ? prevKeys.soundcloud + 1 : prevKeys.soundcloud,
      spotify: activePlayer !== 'spotify' ? prevKeys.spotify + 1 : prevKeys.spotify,
      bandcamp: activePlayer !== 'bandcamp' ? prevKeys.bandcamp + 1 : prevKeys.bandcamp,
    }));
  };

  return (
    <section id="music" className="w-full max-w-2xl py-10 md:py-20 flex flex-col items-center px-4 mx-auto">
      <h2 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase">Ouça</h2>

      <motion.div
        className="relative w-full p-4 sm:p-6 border border-gray-800 rounded-2xl bg-psy-texture bg-cover bg-center overflow-hidden"
        animate={{
          boxShadow: [
            "0 0 15px 0px rgba(185, 28, 28, 0.2)",
            "0 0 30px 5px rgba(185, 28, 28, 0.4)",
            "0 0 15px 0px rgba(185, 28, 28, 0.2)",
          ],
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10">
          
          <PlayerSection 
            title="SoundCloud" 
            platformLink="https://soundcloud.com/archangeloficial/sacramentum-145-f/s-phj0PxNGxFe" 
            platformName="SoundCloud"
            linkColorClass="hover:text-[#ff5500] hover:shadow-[#ff5500]/50"
            titleColorClass="text-[#ff5500]"
            onInteraction={() => handleInteraction('soundcloud')}
          >
            <iframe 
                key={`soundcloud-${playerKeys.soundcloud}`}
                title="SoundCloud Player"
                width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2105021469%3Fsecret_token%3Ds-phj0PxNGxFe&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </PlayerSection>

          <PlayerSection 
            title="Spotify" 
            platformLink="https://open.spotify.com/artist/4DOKilPHgnYuXqq5VOVFSc" 
            platformName="Spotify"
            linkColorClass="hover:text-[#1DB954] hover:shadow-[#1DB954]/50"
            titleColorClass="text-[#1DB954]"
            onInteraction={() => handleInteraction('spotify')}
          >
            <iframe 
                key={`spotify-${playerKeys.spotify}`}
                title="Spotify Player" style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/artist/4DOKilPHgnYuXqq5VOVFSc?utm_source=generator&theme=0" 
                width="100%" height="152" frameBorder="0" allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </PlayerSection>

          <PlayerSection 
            title="Bandcamp" 
            platformLink="https://archangelll333.bandcamp.com/track/work-light-original-mix-135-d" 
            platformName="Bandcamp"
            linkColorClass="hover:text-[#629aa9] hover:shadow-[#629aa9]/50"
            titleColorClass="text-[#629aa9]"
            onInteraction={() => handleInteraction('bandcamp')}
          >
            <iframe 
                key={`bandcamp-${playerKeys.bandcamp}`}
                title="Bandcamp Player" style={{ border: 0, width: '100%', height: '120px' }} 
                src="https://bandcamp.com/EmbeddedPlayer/track=3424674687/size=large/bgcol=212121/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" 
                seamless></iframe>
          </PlayerSection>
        </div>
      </motion.div>
    </section>
  );
};

export default Music;