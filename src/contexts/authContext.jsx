import { createContext, useEffect, useState } from 'react';
import { authencateCall } from '../utils';
// import { Routes } from '../routes';
// import { postData } from '../utils';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [Authencated, setAuthencated] = useState(false);

	const [Token, setToken] = useState('');

	const [FinishedLoading, setFinishedLoading] = useState(false);

	function authencateUser(_token) {
		authencateCall().then(({ data }) => {
			if (data.error) return setFinishedLoading(true);

			setToken(_token);

			localStorage.setItem('user-token', _token);

			setAuthencated(true);

			setFinishedLoading(true);
		});
	}

	function logoutUser() {
		localStorage.removeItem('user-token');

		window.location.href = '/login';
	}

	useEffect(() => {
		const token = localStorage.getItem('user-token');

		if (!token) return setFinishedLoading(true);

		authencateUser(token);
	}, []);

	useEffect(() => {
		if (!FinishedLoading) return;

		var path = window.location.pathname;

		if (path == '/login') {
			if (Authencated) {
				return (window.location.href = '/');
			}

			return;
		}

		if (!Authencated) {
			return (window.location.href = '/login');
		}

		// if (path == '/') {
		// 	if (Authencated) {
		// 		window.location.href = Routes[0].path;
		// 	} else {
		// 		window.location.href = '/login';
		// 	}
		// } else if (path == '/login') {
		// 	if (Authencated) window.location.href = Routes[0].path;
		// } else if (path == '/logout') {
		// 	logoutUser();
		// } else {
		// 	var routeFound = false;

		// 	for (var i = 0; i < Routes.length; i++) {
		// 		var route = Routes[i];

		// 		if (path.startsWith(route.path)) {
		// 			if (!Authencated) return (window.location.href = '/login');

		// 			routeFound = true;
		// 		}
		// 	}

		// 	if (path == '/logout') routeFound = true;

		// 	if (!routeFound) {
		// 		window.location.href = '/';
		// 	}
		// }
	}, [FinishedLoading, Authencated]);

	return (
		<AuthContext.Provider
			value={{
				authencated: [Authencated, setAuthencated],
				finishedLoading: [FinishedLoading, setFinishedLoading],
				token: [Token, setToken],
				authencateUser: authencateUser,
				logoutUser: logoutUser,
			}}
		>
			{FinishedLoading && children}
		</AuthContext.Provider>
	);
};
