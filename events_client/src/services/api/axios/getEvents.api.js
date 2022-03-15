import axios from "axios";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default function getEvents(skip, limit) {
  return axios
    .get(`events?limit=${limit}&skip=${skip}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}
