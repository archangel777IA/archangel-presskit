import React from 'react';
import { motion } from 'framer-motion';

// Componente do Player com texto centralizado
const PlayerSection = ({ title, platformLink, platformName, children }) => (
  <div className="w-full mb-12 last:mb-0 text-center"> {/* Adicionado text-center aqui */}
    <h3 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h3> {/* Removido text-left */}
    <div>{children}</div>
    <div className="mt-3"> {/* Removido text-right */}
      <a href={platformLink} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white transition-colors duration-300">
        Ver no {platformName} →
      </a>
    </div>
  </div>
);

const Music = () => {
  return (
    <section id="music" className="w-full max-w-4xl py-10 md:py-20 flex flex-col items-center px-4">
      <h2 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase">Ouça</h2>

      <motion.div
        className="relative w-full p-4 sm:p-8 border border-gray-800 rounded-2xl bg-black/50 overflow-hidden"
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
        <div 
            className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 600 600\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'2\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }}
        ></div>

        <div className="relative z-10">
          <PlayerSection title="SoundCloud" platformLink="https://soundcloud.com/archangeloficial/sacramentum-145-f/s-phj0PxNGxFe" platformName="SoundCloud">
            <iframe 
                title="SoundCloud Player - sacramentum 145 F"
                width="100%" 
                height="166" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2105021469%3Fsecret_token%3Ds-phj0PxNGxFe&color=%23141414&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </PlayerSection>

          <PlayerSection title="Spotify" platformLink="https://open.spotify.com/artist/4DOKilPHgnYuXqq5VOVFSc" platformName="Spotify">
            <iframe title="Spotify Player" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/artist/4DOKilPHgnYuXqq5VOVFSc?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </PlayerSection>

          <PlayerSection title="Bandcamp" platformLink="https://archangelll333.bandcamp.com/track/work-light-original-mix-135-d" platformName="Bandcamp">
            <iframe title="Bandcamp Player" style={{ border: 0, width: '100%', height: '120px' }} src="https://bandcamp.com/EmbeddedPlayer/track=3424674687/size=large/bgcol=212121/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless></iframe>
          </PlayerSection>
        </div>
      </motion.div>
    </section>
  );
};

export default Music;