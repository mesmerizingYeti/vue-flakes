import GoogleApi from '@/api/google';

const state = () => ({
  event: "",    // chosen event
  events: []    // events from chosen user calendar
});

const getters = {
};

const actions = {
  getEventsFromGoogle: ({ commit, state }, calendarId) => {
    GoogleApi.getEvents(calendarId)
      .then(events => commit('setEvents', { events }))
      .catch(err => {
        commit('setEvents', { events: [] })
        console.error(err);
      })
  },
  chooseEvent: ({ commit, state }, eventId) => {
    if (state.events.length <= 0) {
      commit("setEvent", { event: "" });
      console.error(new Error("No events available"));
    } else {
      let event = state.events.find(event => event.id === eventId);
      commit("setEvent", { event });
    }
  }
};

const mutations = {
  setEvents: (state, { events }) => {
    state.events = events;
  },
  setEvent: (state, { event }) => {
    state.event = event;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};