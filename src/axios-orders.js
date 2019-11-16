import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://burger-builder-in-react-57d8d.firebaseio.com/'
});

export default instance;