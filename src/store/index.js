import { createStore } from 'vuex'

export default createStore({
  state: {
    name: ''
  },
  mutations: {
    buscarPokemon(state, payload){
      state.name = payload
    }
  },
  actions: {
    accionBuscarPokemon({commit}, nombre){
      commit('buscarPokemon', nombre)
    }
  },
  modules: {
  }
})
