import EventsApi from "@/api/events";
import { DateTime } from "luxon";

const state = () => ({
  events: []
});

const getters = {};

const actions = {
  fetchEvents: ({ commit }) => {
    EventsApi.getEvents()
      .then(({ data: events }) => {
        commit("setEvents", { events });
      })
      .catch(err => console.error(err))
  },
  createEvent: ({ rootState }) => {
    if (rootState.flakes.flakeChosen && 
      rootState.google.calendar && 
      rootState.google.event) {
        // make sure user has chosen flake, calendar and event
        const { _id: flake } = rootState.flakes.flake;
        const { 
          summary: event, 
          id: google_event_id, 
          start: startObject, 
          end: endObject 
        } = rootState.google.event;
        const { id: google_calendar_id } = rootState.google.calendar;
        const start = DateTime.fromISO(startObject.dateTime).toMillis();
        const end = DateTime.fromISO(endObject.dateTime).toMillis();
        const newEvent = {
          event,
          flake,
          start,
          end,
          google_calendar_id,
          google_event_id
        }
        EventsApi.postEvent(newEvent)
          .then(data => {console.log(data)})
          .catch(err => console.error(err))
    }
  }
};

const mutations = {
  setEvents: ( state, { events }) => {
    state.events = events;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}