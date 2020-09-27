import Axios from "axios";

export default {

  getAllFlakes: async () => {
    let response = new Promise((resolve, reject) => {
      Axios.get("/api/excuses")
        .then(({ data }) => resolve(data))
        .catch(err => reject(err))
    });
    return response;
  }

};