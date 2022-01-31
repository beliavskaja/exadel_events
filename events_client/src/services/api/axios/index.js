import axios from "axios";
import Axios from "axios";

export default function login(formValue){
    Axios.defaults.baseURL = "http://localhost:3000/";

    axios
    .post('add_user', formValue)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });

    axios
    .get('users')
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    })
}