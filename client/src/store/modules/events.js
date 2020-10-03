const state = () => ({
  event: null,
  events: []
});

const getters = {};

const actions = {
  getEvents: ({ commit, state }) => {
    commit;
    state;
  },
  createEvent: ({ commit, rootState }) => {
    if (rootState.flakes.flakeChosen && 
      rootState.google.calendar && 
      rootState.google.event) {
        // make sure user has chosen flake, calendar and event
        const { _id: excuse } = rootState.flakes.flake;
        const { summary: event, id: google_event_id, start, end } = rootState.google.event;
        const { id: google_calendar_id } = rootState.google.calendar;
        const newEvent = {
          event,
          excuse,
          start,
          end,
          google_calendar_id,
          google_event_id
        }
        
    }
  }
};

const mutations = {};