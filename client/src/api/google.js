import Axios from "axios";

export default {

  getCalendars: async () => {
    let response = new Promise((resolve, reject) => {
      Axios.get("/api/calendars")
        .then(({ data }) => resolve(data.items))
        .catch(err => reject(err))
    });
    return response;
  },

  getEvents: calendarId => {
    let response = new Promise((resolve, reject) => {
      Axios.get(`/api/calendar_events/${calendarId}`)
        .then(({ data }) => resolve(data.items))
        .catch(err => reject(err))
    });
    return response;
  }

};