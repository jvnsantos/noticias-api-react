import axios from 'axios';

const api = axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e3ba70099ab14c68be5f0bd28b63c2e6'
});

export default api;