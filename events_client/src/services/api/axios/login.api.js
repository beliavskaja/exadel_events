import axios from "axios";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default function login(formValue){
    axios
    .post('login', formValue)
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    });
};