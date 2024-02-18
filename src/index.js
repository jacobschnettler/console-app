import { createRoot } from 'react-dom/client';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ConsolePage, LoginPage } from './pages';

const root = createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<AuthContextProvider>
			<Switch>
				<Route path='/' component={ConsolePage} exact />

				<Route path='/login' component={LoginPage} exact />
			</Switch>
		</AuthContextProvider>
	</BrowserRouter>
);
