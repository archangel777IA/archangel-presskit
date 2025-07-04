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
      },
      backgroundImage: {
        'artist-photo': "url('/images/photo-1.jpg')",
        'soundcloud-profile': "url('/images/soundcloud-profile.png')",
        'bandcamp-releases': "url('/images/bandcamp-releases.png')",
        'spotify-profile': "url('/images/spotify-profile.png')",
      }
    },
  },
  plugins: [],
}