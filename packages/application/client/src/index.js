import { createApp } from 'vue'
import App from './app.vue'
import Router from './routes'

createApp(App)
  .use(Router)
  .mount('#app')
