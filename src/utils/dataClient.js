import axios from 'axios';

axios.defaults.baseURL = 'https://prolearn-fb6bb.firebaseio.com';

export const fetchData = (path='/subjects.json') => {
    //default path is [subjects.json]
    return axios.get(path).then(resp => resp.data);
}
