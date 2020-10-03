import Axios from "axios";

export default {

  getEvents: () => {
    let response = new Promise((resolve, reject) => {
      Axios.get("/api/events")
        .then(response => resolve(response))
        .catch(err => reject(err))
    });

    return response;
  },
  postEvent: (event) => {
    let response = new Promise((resolve, reject) => {
      Axios.post("/api/events", event)
        .then(response => resolve(response))
        .catch(err => reject(err))
    });

    return response;
  }

}