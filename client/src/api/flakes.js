import flakes from "@/data/excuses";

export default {

  getAllFlakes: async () => {
    let response = new Promise((resolve, reject) => {
      resolve(flakes);
      reject(new Error("Should never reach this point"));
    });
    return response;
  }

};