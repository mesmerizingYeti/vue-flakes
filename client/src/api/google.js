import { calendarOneEvents, calendarTwoEvents, calendarThreeEvents, calendars } from "../data"

export default {

  getCalendars: async () => {
    let response = new Promise((resolve, reject) => {
      resolve(calendars);
    });
    return response;
  },
  getEvents: calendarId => {
    let response = new Promise((resolve, reject) => {
      switch (calendarId) {
        case "1@group.calendar.google.com":
          resolve(calendarOneEvents);
        case "2@group.calendar.google.com":
          resolve(calendarTwoEvents);
        case "3@group.calendar.google.com":
          resolve(calendarThreeEvents);
        default:
          reject(new Error("Invalid calendar ID"));
      };
    });
    return response;
  }

};