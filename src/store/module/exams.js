import actionsGlobal from '../actions'
import mutationsGlobal from '../mutations'

const state = () => ({
  all: [],
  item: null
})

const getters = {
  getAll(state) {
    return state.all
  }
}

const actions =  {
  ...actionsGlobal
}

const mutations = {
  ...mutationsGlobal
}

export default { namespaced: true, state, actions, getters, mutations }