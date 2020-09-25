import Vue from "vue";
import Vuex from "vuex";
import calendars from "./modules/calendars";
import flakes from "./modules/flakes";
import events from "./modules/events";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    calendars,
    flakes,
    events
  },
  strict: debug
});
