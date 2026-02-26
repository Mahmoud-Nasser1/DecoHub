/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },

      colors: {
        /* === Core System === */
        background: "#F8F6F2",
        foreground: "#1F2A26",

        card: {
          DEFAULT: "hsl(25, 25%, 92%)",
          foreground: "#1F2A26",
        },

        popover: {
          DEFAULT: "#F8F6F2",
          foreground: "#1F2A26",
        },

        primary: {
          DEFAULT: "#A3BFAE",
          foreground: "#1F2A26",
        },

        secondary: {
          DEFAULT: "#E6D5C3",
          foreground: "#8C5A3C",
        },

        muted: {
          DEFAULT: "#EFE7DD",
          foreground: "#6B7C74",
        },

        accent: {
          DEFAULT: "#4F6F63",
          foreground: "#F8F6F2",
        },

        destructive: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },

        /* === UI Helpers === */
        border: "#D6D6D6",
        input: "#D6D6D6",
        ring: "#A3BFAE",

        /* === Custom Brand Colors === */
        earth: {
          DEFAULT: "#8C5A3C",
          foreground: "#F8F6F2",
        },

        sage: {
          DEFAULT: "#A3BFAE",
          deep: "#4F6F63",
        },

        beige: "#EDE3D7",
        cream: "#F8F6F2",
        light: "#F8F6F2",
        dark: "#1F2A26",

        /* === Sidebar === */
        sidebar: {
          DEFAULT: "#F8F6F2",
          foreground: "#1F2A26",
          primary: "#4F6F63",
          "primary-foreground": "#F8F6F2",
          accent: "#A3BFAE",
          "accent-foreground": "#1F2A26",
          border: "#D6D6D6",
          ring: "#A3BFAE",
        },
      },

      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },

      clipPath: {
        hexagon: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
});
