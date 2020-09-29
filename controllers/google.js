const { google } = require("googleapis");
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
const SCOPES = ['profile', 'email', 'https://www.googleapis.com/auth/calendar'];

const client = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, SCOPES);

module.exports = {

  getCalendars: async (tokens) => {
    let response = new Promise((resolve, reject) => {
      client.setCredentials(tokens);
      resolve(google.calendar({ version: "v3", auth: client }).calendarList.list());
    });

    return response;
  }

}