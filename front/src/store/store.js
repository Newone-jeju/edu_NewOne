import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    removeToken (state) {
      state.token = null
    }
  },
  actions: {
    setToken (context, token) {
      context.commit('setToken', token)
    },
    removeToken (context) {
      context.commit('removeToken')
    }
  }
})
