import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-my-burger-d3254.firebaseio.com/',
});

export default instance;
