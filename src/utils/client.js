import axios from 'axios';

axios.defaults.baseURL = 'https://fd121012-5498-4dd0-91c1-6ab477550298.mock.pstmn.io';

export const fetchData = (path='/home/summary') => {
    //default path is [subjects.json]
    return axios.get(path).then(resp => resp.data);
}
