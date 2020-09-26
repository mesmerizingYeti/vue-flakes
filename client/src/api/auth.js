import Axios from "axios"

export default {

  getAuthentication: async () => {
    let response = new Promise((resolve, reject) => {
      Axios.get("/auth/authenicated")
        .then(response => {

        })
        .catch(error => reject(error))
    })

    return response;
  }

}