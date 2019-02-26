import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ae307.firebaseio.com/'
});

export default instance;