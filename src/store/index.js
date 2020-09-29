import Vue from 'vue'
import Vuex from 'vuex'
import actions from './common/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogItems: []
  },
  mutations: {
    setBlogItems(state, payload) {
      state.blogItems = payload;
    }
  },
  actions: actions,
  modules: {},
  getters: {
    getBlogItems: state => state.blogItems
  }
})
