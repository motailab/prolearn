import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const getSubjects = () => {
    return axios.get('/subjects').then(resp => resp.data);
}