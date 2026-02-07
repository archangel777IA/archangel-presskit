import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const PlayerSection = ({
  title,
  platformLink,
  platformName,
  linkColorClass,
  titleColorClass,
  linkGlowClass,
  children,
}) => (
  <div className="w-full mb-12 last:mb-0 text-center">
    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${titleColorClass}`}>{title}</h3>

    <div className="w-full overflow-hidden rounded-xl">{children}</div>

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

PlayerSection.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  platformLink: PropTypes.string.isRequired,
  platformName: PropTypes.string.isRequired,
  linkColorClass: PropTypes.string.isRequired,
  titleColorClass: PropTypes.string.isRequired,
  linkGlowClass: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Music = ({ isMobile, content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      id="music"
      ref={ref}
      className="w-full max-w-6xl py-10 md:py-20 flex flex-col items-center px-4 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.4 }}
    >
      <h2 className="mb-12 sm:mb-16 text-center text-3xl sm:text-4xl font-bold tracking-wider uppercase font-elegance">
        {content.title}
      </h2>

      <motion.div
        className="relative w-full p-4 sm:p-6 border border-gray-800 rounded-2xl overflow-hidden"
        animate={
          !isMobile && isInView
            ? {
                boxShadow: [
                  '0 0 15px 0px rgba(185, 28, 28, 0.2)',
                  '0 0 30px 5px rgba(185, 28, 28, 0.4)',
                  '0 0 15px 0px rgba(185, 28, 28, 0.2)',
                ],
              }
            : { boxShadow: '0 0 15px 0px rgba(185, 28, 28, 0.2)' }
        }
        transition={{
          duration: 2.2,
          repeat: isInView ? Infinity : 0,
          ease: 'easeInOut',
        }}
      >
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/box-background.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-transparent z-10"></div>

        <div className="relative z-20">
          {/* ✅ SOUNDCloud COM AS 2 TRACKS (MANTIDO COMO VOCÊ COLOCOU) */}
          <PlayerSection
            title={content.soundcloud}
            platformLink="https://soundcloud.com/archangeloficial"
            platformName="SoundCloud"
            linkColorClass="hover:text-[#ff5500]"
            titleColorClass="text-[#ff5500]"
            linkGlowClass="hover:shadow-[0_0_15px_rgba(255,85,0,0.5)]"
          >
            <div className="w-full space-y-4">
              <div className="w-full overflow-hidden rounded-xl">
                <iframe
                  title="SoundCloud Player - LUMEN INTERSTICIAL 135 G"
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2245920539&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </div>

              <div className="w-full overflow-hidden rounded-xl">
                <iframe
                  title="SoundCloud Player - Yakuwan Ninawan"
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2210867765&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                ></iframe>
              </div>
            </div>
          </PlayerSection>

          {/* SPOTIFY (NÃO ALTERADO) */}
          <PlayerSection
            title={content.spotify}
            platformLink="https://open.spotify.com/artist/4DOKilPHgnYuXqq5VOVFSc"
            platformName="Spotify"
            linkColorClass="hover:text-[#1DB954]"
            titleColorClass="text-[#1DB9a9]"
            linkGlowClass="hover:shadow-[0_0_15px_rgba(29,185,84,0.5)]"
          >
            <iframe
              title="Spotify Player"
              data-testid="embed-iframe"
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/4DOKilPHgnYuXqq5VOVFSc?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </PlayerSection>

          {/* BANDCAMP (NÃO ALTERADO) */}
          <PlayerSection
            title={
              <>
                Escutar em .WAV no <span className="text-[#629aa9]">Bandcamp</span>
              </>
            }
            platformLink="https://archangelll333.bandcamp.com"
            platformName="Bandcamp"
            linkColorClass="hover:text-[#629aa9]"
            titleColorClass="text-white"
            linkGlowClass="hover:shadow-[0_0_15px_rgba(98,154,169,0.5)]"
          >
            <div className="space-y-4">
              <iframe
                title="Bandcamp Player - Work Light"
                style={{ border: 0, width: '100%', height: '120px' }}
                src="https://bandcamp.com/EmbeddedPlayer/track=3424674687/size=large/bgcol=212121/linkcol=e99708/tracklist=false/artwork=small/transparent=true/"
                seamless
                loading="lazy"
              ></iframe>

              <iframe
                title="Bandcamp Player - Obsidian"
                style={{ border: 0, width: '100%', height: '120px' }}
                src="https://bandcamp.com/EmbeddedPlayer/track=2539249662/size=large/bgcol=212121/linkcol=e99708/tracklist=false/artwork=small/transparent=true/"
                seamless
                loading="lazy"
              ></iframe>
            </div>
          </PlayerSection>
        </div>
      </motion.div>
    </motion.section>
  );
};

Music.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  content: PropTypes.object.isRequired,
};

export default Music;
