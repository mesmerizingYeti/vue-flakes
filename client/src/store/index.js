import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import calendars from "./modules/calendars";
import flakes from "./modules/flakes";
import events from "./modules/events";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    auth,
    calendars,
    flakes,
    events
  },
  strict: debug
});
