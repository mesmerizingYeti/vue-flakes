import flakes from "@/data/excuses";

export default {

  getAllFlakes: async () => {
    let response = new Promise((resolve, reject) => {
      resolve(flakes);
    });
    return response;
  }

};