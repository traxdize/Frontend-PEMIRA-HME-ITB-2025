import { transform } from 'next/dist/build/swc'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'Orange' : '#E8DFA0',
      },
      fontFamily: {
        'Montserrat' : ['Montserrat'],
      },
      keyframes: {
        popup: {
          '0%': { 
            transform: 'translateY(7%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        fadein: {
          '0%': { 
            opacity: '0'
          },
          '100%': { 
            opacity: '1'
          }
        },
        spinback: {
          '0%': { 
            transform: 'rotate(360deg)',
          },
          '100%': { 
            transform: 'rotate(0deg)',
          }
        },
        slowspin: {
          '0%': { 
            transform: 'rotate(0deg)',
          },
          '100%': { 
            transform: 'rotate(360deg)',
          }
        },
      },
      animation: {
        popup: 'popup 0.5s ease-in-out',
        spinback: 'spinback 1s linear infinite',
        slowspin: 'slowspin 2s linear infinite',
        fadein: 'fadein 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
export default config
