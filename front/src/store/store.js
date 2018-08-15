import Vue from 'vue'
import Vuex from 'vuex'
import createPersisedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    name: null
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    removeToken (state) {
      state.token = null
    },
    setName (state, name) {
      state.name = name
    },
    removeName (state) {
      state.name = null
    }
  },
  actions: {
    setToken (context, token) {
      context.commit('setToken', token)
    },
    removeToken (context) {
      context.commit('removeToken')
    },
    setName (context, name) {
      context.commit('setName', name)
    },
    removeName (context) {
      context.commit('removeName')
    }
  },
  plugins: [
    createPersisedState()
  ]
})
