import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';  // Assicurati di importare correttamente lo store Vuex
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@/assets/css/custom.css'; //da togliere

createApp(App).use(store).use(router).mount('#app');  // Collega lo store Vuex e il router
