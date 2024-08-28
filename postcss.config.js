import tailwind from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default {
  plugins: [
    tailwind({
      darkMode: 'class',
      content: ['./.vitepress/theme/**/*.vue'],
      plugins: [tailwindTypography],
      theme: {
        extend: {
          colors: {
            "dark-bg": "#1a202c",
            "dark-text": "#a0aec0",
            "dark-border": "#2d3748",
          },
        },
      },
    }),
  ]
}