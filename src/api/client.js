const axios = require('axios');
const baseURL = 'https://api.spacexdata.com/v4';

export const api = axios.create({
    baseURL: baseURL,
})