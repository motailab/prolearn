import axios from 'axios';

const instance = axios.create({baseURL: 'https://fd121012-5498-4dd0-91c1-6ab477550298.mock.pstmn.io'});

export const fetchData = (path='/home/summary') => {
    //default path is [subjects.json]
    return instance.get(path).then(resp => resp.data);
}
