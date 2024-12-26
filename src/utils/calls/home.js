// Home automation calls

import { API } from '../api';

export function fetchHomeServices() {
	return API.get('/services/get');
}
