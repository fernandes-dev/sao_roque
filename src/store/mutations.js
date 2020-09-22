const mutations = {
  doctor(state, payload) {
    state.doctor = payload;
  },
  request(state, payload) {
    state[payload.state] = payload.data;
  }
}

export default mutations