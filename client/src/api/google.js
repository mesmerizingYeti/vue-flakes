import { calendarOneEvents, calendarTwoEvents, calendarThreeEvents } from "../data"
import Axios from "axios";

export default {

  getCalendars: async () => {
    let response = new Promise((resolve, reject) => {
      Axios.get("/api/calendars")
        .then(({ data }) => {
          console.log(data.items);
          resolve(data.items);
        })
        .catch(err => reject(err))
    });
    return response;
  },

  getEvents: calendarId => {
    let response = new Promise((resolve, reject) => {
      Axios.get(`/api/calendar_events/${calendarId}`)
        .then((response) => resolve(response))
        .catch(err => reject(err))
    });
    return response;
  }

};