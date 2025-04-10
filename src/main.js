import Vue from 'vue';
import App from './App.vue';
import router from './router';  
import '@mdi/font/css/materialdesignicons.css';
// Import CSS framework to decorate web UI
import 'semantic-ui-css/semantic.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Unused Bootstrap import

// Import and configure the "flash-message" library 
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 2000  // Time unit: milliseconds (5000 ms = 5 seconds)
  }
});

Vue.config.productionTip = false;

new Vue({
  router,  // Ensure the router is correctly passed here
  render: function (h) { return h(App); }
}).$mount('#app');
