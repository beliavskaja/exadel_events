import axios from "axios";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default function registerUser(formValue){
    return axios
    .post('add_user', formValue)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });
};