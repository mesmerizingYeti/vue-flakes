import Axios from "axios";

export default {

  fetchEvents: () => {
    Axios.get("/api/events")
      .then(response => {console.log(response); res.sendStatus(200);})
      .catch(err => console.error(err))
  },
  createEvent: (event) => {
    Axios.post("/api/events", event)
      .then(() => res.sendStatus(200))
      .catch(err => console.error(err))
  }

}