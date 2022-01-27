// const axios = require('axios').default;
import axios from "axios"

export default function login(formValue){

    axios
    .post('http://localhost:3000/add_user', formValue)
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });

    axios
    .get('http://localhost:3000/users')
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.error(error);
    })
}