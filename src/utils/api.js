import axios from 'axios';

export const API = axios.create({
	// baseURL: 'http://localhost:4080',
	baseURL: 'https://api.jschnettler.com',
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('user-token'),
	},
});
