import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import google from "./modules/google";
import flakes from "./modules/flakes";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    google,
    flakes
  },
  strict: debug
});
