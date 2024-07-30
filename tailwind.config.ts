import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        prime:{
          darker: "hsl(var(--prime-darker))",
          dark: "hsl(var(--prime-dark))",
          base: "hsl(var(--prime-base))",
          light: "hsl(var(--prime-light))",
          lighter: "hsl(var(--prime-lighter))",
        },
        blue: {
          darker: "hsl(var(--blue-darker))",
          dark: "hsl(var(--blue-dark))",
          base: "hsl(var(--blue-base))",
          light: "hsl(var(--blue-light))",
          lighter: "hsl(var(--blue-lighter))",
        },
        orange: {
          darker: "hsl(var(--orange-darker))",
          dark: "hsl(var(--orange-dark))",
          base: "hsl(var(--orange-base))",
          light: "hsl(var(--orange-light))",
          lighter: "hsl(var(--orange-lighter))",
        },
        red: {
          darker: "hsl(var(--red-darker))",
          dark: "hsl(var(--red-dark))",
          base: "hsl(var(--red-base))",
          light: "hsl(var(--red-light))",
          lighter: "hsl(var(--red-lighter))",
        },
        green: {
          darker: "hsl(var(--green-darker))",
          dark: "hsl(var(--green-dark))",
          base: "hsl(var(--green-base))",
          light: "hsl(var(--green-light))",
          lighter: "hsl(var(--green-lighter))",
        },
        yellow: {
          darker: "hsl(var(--yellow-darker))",
          dark: "hsl(var(--yellow-dark))",
          base: "hsl(var(--yellow-base))",
          light: "hsl(var(--yellow-light))",
          lighter: "hsl(var(--yellow-lighter))",
        },
        purple: {
          darker: "hsl(var(--purple-darker))",
          dark: "hsl(var(--purple-dark))",
          base: "hsl(var(--purple-base))",
          light: "hsl(var(--purple-light))",
          lighter: "hsl(var(--purple-lighter))",
        },
        pink: {
          darker: "hsl(var(--pink-darker))",
          dark: "hsl(var(--pink-dark))",
          base: "hsl(var(--pink-base))",
          light: "hsl(var(--pink-light))",
          lighter: "hsl(var(--pink-lighter))",
        },
        teal: {
          darker: "hsl(var(--teal-darker))",
          dark: "hsl(var(--teal-dark))",
          base: "hsl(var(--teal-base))",
          light: "hsl(var(--teal-light))",
          lighter: "hsl(var(--teal-lighter))",
        },
        neutral: {
          900: "hsl(var(--neutral-900))",
          800: "hsl(var(--neutral-800))",
          700: "hsl(var(--neutral-700))",
          600: "hsl(var(--neutral-600))",
          500: "hsl(var(--neutral-500))",
          400: "hsl(var(--neutral-400))",
          300: "hsl(var(--neutral-300))",
          200: "hsl(var(--neutral-200))",
          100: "hsl(var(--neutral-100))",
          0: "hsl(var(--neutral-0))",
        },
        bg: {
          strong: {
            900: "hsl(var(--bg-strong-900))",
          },
          surface: {
            700: "hsl(var(--bg-surface-700))",
          },
          soft: {
            200: "hsl(var(--bg-soft-200))",
          },
          weak: {
            100: "hsl(var(--bg-weak-100))",
          },
          white: {
            0: "hsl(var(--bg-white-0))",
          },
        },
        text: {
          main: {
            900: "hsl(var(--text-main-900))",
          },
          sub: {
            500: "hsl(var(--text-sub-500))",
          },
          soft: {
            400: "hsl(var(--text-soft-400))",
          },
          disabled: {
            300: "hsl(var(--text-disabled-300))",
          },
          white: {
            0: "hsl(var(--text-white-0))",
          },
        },
        stroke: {
          strong: {
            900: "hsl(var(--stroke-strong-900))",
          },
          sub: {
            300: "hsl(var(--stroke-sub-300))",
          },
          soft: {
            200: "hsl(var(--stroke-soft-200))",
          },
          disabled: {
            100: "hsl(var(--stroke-disabled-100))",
          },
          white: {
            0: "hsl(var(--stroke-white-0))",
          },
        },
        icon: {
          strong: {
            900: "hsl(var(--icon-strong-900))",
          },
          sub: {
            500: "hsl(var(--icon-sub-500))",
          },
          soft: {
            400: "hsl(var(--icon-soft-400))",
          },
          disabled: {
            300: "hsl(var(--icon-disabled-300))",
          },
          white: {
            0: "hsl(var(--icon-white-0))",
          },
        },
        context: {
          warning: "hsl(var(--context-warning))",
          success: "hsl(var(--context-success))",
          information: "hsl(var(--context-information))",
          away: "hsl(var(--context-away))",
          error: "hsl(var(--context-error))",
          feature: "hsl(var(--context-feature))",
          neutral: "hsl(var(--context-neutral))",
          verified: "hsl(var(--context-verified))",
        },

      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config