/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
        'brand-red': '#b91c1c',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
'witch mystery': ['witch mystery', 'serif'] 
      },
      backgroundImage: {
        'artist-photo': "url('/images/artist-photo.jpg')",
        'soundcloud-profile': "url('/images/soundcloud-profile.png')",
        'bandcamp-releases': "url('/images/bandcamp-releases.png')",
        'spotify-profile': "url('/images/spotify-profile.png')",
        // ===============================================
        // NOVA LINHA ADICIONADA AQUI
        // ===============================================
        'psy-texture': "url('/images/psychedelic-texture.jpg')",
      }
    },
  },
  plugins: [],
}