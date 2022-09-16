const axios = require('axios');
const baseURL = 'https://api.spacexdata.com/v4';

export const getRockets = async () => {
axios.get(`${baseURL}/rockets`)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });
}