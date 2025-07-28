import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de que el archivo esté en src/router/index.js

createApp(App)
  .use(router)
  .mount('#app');
