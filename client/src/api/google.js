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
      switch (calendarId) {
        case "1@group.calendar.google.com":
          resolve(calendarOneEvents);
          break;
        case "2@group.calendar.google.com":
          resolve(calendarTwoEvents);
          break;
        case "3@group.calendar.google.com":
          resolve(calendarThreeEvents);
          break;
        default:
          reject(new Error("Invalid calendar ID"));
      }
    });
    return response;
  }

};