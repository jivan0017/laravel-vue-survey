import { createApp } from 'vue';
// ANCHOR: add fragment store
import store from './store';
import App from './App.vue';
// import './style.css';
import './index.css';
import router from './router';

createApp(App)
  .use(store) // ANCHOR: add store
  .use(router)
  .mount('#app')
