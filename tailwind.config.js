module.exports = {
  content: ["./pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
        "morp":"#EBECF0",
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
      animation: {
        spin: "spin 3s linear infinite",
        ping:"ping 2s linear infinite"
      },

      keyframes: {
        spin: {
          "0%": { transform: 'rotate(0deg)' },
          "100%": { transform: 'rotate(-360deg)' },
        },
      }

    },

    fontFamily: {
      tillana: ["Tillana', cursive"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [require('tailwindcss-neumorphism')],
};
