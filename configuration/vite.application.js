import vue from '@vitejs/plugin-vue'

/**
 * Build configuration for the application
 */
export default {
  plugins: [
    vue()
  ],

  build: {
    minify: 'eslint'
  }
}
