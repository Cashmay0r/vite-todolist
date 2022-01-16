import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import Home from './views/Home.vue'
import './index.css'
import vuex from './store/index.js'


createApp(App).use(router).use(vuex).mount('#app')
