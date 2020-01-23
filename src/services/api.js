import axios from 'axios';

const api = axios.create({
    baseURL: 'http://206.189.180.204:3333/api/v1/',
});

export default api;
