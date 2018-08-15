import Vue from 'vue'
import Vuex from 'vuex'
import createPersisedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

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
    createPersisedState({
      storage: {
        getItem: key => Cookies.get(key),
        setItem: (key, value) => {
          Cookies.set(key, value, { secure: false })
        },
        removeItem: key => {
          Cookies.remove(key)
        }
      }
    })
  ]
})
