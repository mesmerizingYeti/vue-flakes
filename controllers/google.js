const { google } = require("googleapis");
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const SCOPES = ['profile', 'email', 'https://www.googleapis.com/auth/calendar'];

const client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SCOPES);

module.exports = {

  getCalendars: async (tokens) => {
    let response = new Promise((resolve, reject) => {
      client.setCredentials(tokens);
      const calendar = google.calendar({ version: "v3", auth: client });
      calendar.calendarList.list()
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    });

    return response;
  },
  getEvents: async (calendarId, tokens) => {
    let response = new Promise((resolve, reject) => {
      client.setCredentials(tokens);
      const calendar = google.calendar({ version: "v3", auth: client });
      calendar.events.list({
        calendarId,
        timeMin: (new Date()).toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime'
      })
        .then(res => resolve(res.data))
        .catch(e => reject(e))
    })

    return response;
  }

}