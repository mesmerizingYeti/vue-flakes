const { google } = require("googleapis");
const { CLIENT_ID, CLIENT_SECRET } = process.env

const client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET)

module.exports = {

  getCalendars: async (tokens) => {
    let response = new Promise((resolve, reject) => {
      client.setCredentials(tokens);
      console.log(client)
      resolve(google.calendar({ version: "v3", auth: client }).calendarList.list());
    });

    return response;
  }

}