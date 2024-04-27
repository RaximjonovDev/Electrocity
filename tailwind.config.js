/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        base: '1240px',
      },
      fontSize:{
        '32':'32px',
        '22':'22px'
      },
      colors:{
        lightBlue: '#513BFF',
        lighterBlue: '#0091FF',
        grey : '#F9F9F9'
      },
      backgroundImage:{
        'elektromontaj': "linear-gradient(rgba(0, 3, 24, 0.40) 100%, #09161F 100%), url('./src/assets/img/elektromontaj.webp')",
        'elektromontajService': "linear-gradient(rgba(0, 3, 24, 0.40) 100%, #09161F 100%), url('./src/assets/img/elektromontaj-2.webp')",
      }
    },
  },
  plugins: [],
}

