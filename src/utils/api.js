import axios from 'axios';

export const API = axios.create({
	// baseURL: 'http://localhost:4080',
	baseURL: 'https://lab.jschnettler.com',
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('user-token'),
	},
});
