import axios from 'axios';

const filmsApi = axios.create({
    baseURL: "http://localhost:9000"
});

export default filmsApi;