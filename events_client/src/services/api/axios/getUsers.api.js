import axios from "axios";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default function getUsers(){
return axios
.get('users')
.then((response) => {
    return response.data;
})
.catch((error) => {
    console.error(error);
});
};