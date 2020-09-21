import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// state object
const state = {
  flake: "",          // chosen flake
  severity: "",       // chosen flake severity
  // style Excuses page based on flakeChosen and flakeError
  flakeChosen: false,
  flakeError: false,
  calendar: "",       // chosen calendar
  calendars: [],      // user's google calendar list
  event: "",          // chosen event
  events: []          // user's events from chosen calendar
};

const mutations = {
  setFlake: newFlake => state.flake = newFlake
};

const actions = {};

const getters = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
