import Vue from 'vue';
import './assets/style.scss';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import VuePageTransition from 'vue-page-transition';

Vue.use(VuePageTransition);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
