import axios from "axios";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default function login(formValue){
    return axios
    .post('login', formValue)
    .then((response) => {
        return response;
    }).catch((error) => {
        console.error(error);
    });
};