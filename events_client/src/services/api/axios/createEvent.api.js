import axios from "axios";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default function createEvent(formValue){
    return axios
    .post('add_event', formValue)
    .then((response) => {
    })
    .catch((error) => {
        console.error(error);
    });
};