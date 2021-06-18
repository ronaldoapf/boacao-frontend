import axios from 'axios';
import Storage from 'utils/Storage';

const api = axios.create({
	baseURL: 'http://64.227.10.141/'
});

api.interceptors.request.use(config => {
	const token = Storage.get('@Token');
	config.headers.authorization = token;
	return config;
})

export default api;