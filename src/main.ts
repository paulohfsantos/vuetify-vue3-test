import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Plugins
import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import axios from 'axios';
// import router from './router'

const app = createApp(App)

registerPlugins()

app
  .use(createPinia())
  .use(vuetify)
  .mount('#app')
