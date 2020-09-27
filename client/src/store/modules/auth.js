import AuthApi from "@/api/auth";

const state = () => ({
  isAuthenticated: false,
  user: null,
  isLoading: true
});

const getters = {
  isAuthenticated: state => state.isAuthenticated,
  isLoading: state => state.isLoading
};

const actions = {
  checkAuthentication({ commit }) {
    AuthApi.getAuthentication()
      .then(({ data }) => {
        if(data.isAuthenticated) {
          commit("setAuthentication", { isAuthenticated: true });
          commit("setUser", { user: data.user });
        } else {
          commit("setAuthentication", { isAuthenticated: false });
          commit("setUser", { user: null });
        }
        commit("setLoading", { isLoading: false });
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
  },
  setLoading(state, { isLoading }) {
    state.isLoading = isLoading;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}