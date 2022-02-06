import axios from "axios";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default function getUsers(){
axios
.get('users')
.then((response) => {
    console.log(response.data);
})
.catch((error) => {
    console.error(error);
});
};