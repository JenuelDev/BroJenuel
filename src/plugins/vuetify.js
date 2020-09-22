import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const options = {
     icons: {
          iconfont: 'mdi', // default - only for display purposes
     },
     theme: {
          dark: true
     }
};
export default new Vuetify(options);
