import axios from "axios";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/";

export default function getEvents(){
return axios
.get('events')
.then((response) => {
    console.log(response.data);
    return response.data;
})
.catch((error) => {
    console.error(error);
});
};