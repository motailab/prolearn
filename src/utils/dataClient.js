import axios from 'axios';

axios.defaults.baseURL = 'https://prolearn-fb6bb.firebaseio.com';

export const getSubjects = () => {
    return axios.get('/subjects.json').then(resp => resp.data);
}
