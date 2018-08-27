

import Vue from 'vue';
import './assets/bootstrap.scss';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

// Events
window.eventBus = new Vue();

// Global Data
// I'm 90% percent sure it's not a good idea,
// but to be fair this is my first time with vue and a needed a quick solution
window.contactData = {};

fetch("/data.json")
  .then(response => response.json())
  .then(json => {
    contactData = json.data;

    // Start the vue stuff, after we got the data
    // + see the previous comment
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  });