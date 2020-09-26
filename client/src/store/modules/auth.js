import AuthApi from "@/api/auth";

const state = () => ({
  isAuthenticated: false,
  user: null
});

const getters = {
  isAuthenticated: state => state.isAuthenticated
};

const actions = {
  checkAuthentication({ commit }) {
    AuthApi.getAuthentication()
      .then(response => {
        if(response.isAuthenticated) {
          commit("setAuthentication", { isAuthenticated: true });
          commit("setUser", { user: response.user });
        } else {
          commit("setAuthentication", { isAuthenticated: false });
          commit("setUser", { user: null });
        }
      })
      .catch(err => console.error(err))
  }
};

const mutations = {
  setAuthentication(state, { isAuthenticated }) {
    state.isAuthenticated = isAuthenticated;
  },
  setUser(state, { user }) {
    state.user = user;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}