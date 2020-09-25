import GoogleApi from "@/api/google";

const state = () => ({
  calendar: "",   // chosen calendar
  calendars: []   // user google calendars
})

const getters = {};

const actions = {
  getCalendarsFromGoogle: ({ commit, state }) => {
    state;
    GoogleApi.getCalendars()
      .then(calendars => commit("setCalendars", { calendars }))
      .catch(err => {
        commit("setCalendars", { calendars: [] });
        console.error(err);
      })
  },
  chooseCalendar: ({ commit, state }, calendarId) => {
    if (state.calendars.length <= 0) {
      commit("setCalendar", { calendar: "" });
      console.error(new Error("No calendars available"));
    } else {
      let calendar = state.calendars.find(calendar => calendar.id === calendarId);
      commit("setCalendar", { calendar });
    }

  }
};

const mutations = {
  setCalendars: (state, { calendars }) => {
    state.calendars = calendars;
  },
  setCalendar: (state, { calendar }) => {
    state.calendar = calendar;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}