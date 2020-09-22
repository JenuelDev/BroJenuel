import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const options = {
     icons: {
          iconfont: 'mdi', // default - only for display purposes
     },
};
export default new Vuetify(options);
