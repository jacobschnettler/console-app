// API Authencation calls

import { API } from '../api';

export function loginCall(body) {
	return API.post('/auth/login', body);
}

export function authencateCall() {
	return API.get('/auth/user');
}
