import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios"; 

axios.default.baseURL =
  process.env.NODE_NEV === "development" ? "http://localhost:3000" : "/"; 

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
