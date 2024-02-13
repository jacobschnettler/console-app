import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ConsolePage, LoginPage } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		{/* <LoginPage /> */}

		{<ConsolePage />}
	</React.StrictMode>
);
