import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'


createApp(App).use(router, VueSession).mount('#app')
