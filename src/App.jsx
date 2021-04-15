import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Login />
				</Route>
				<Route path="/registrar">
					<Register />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
