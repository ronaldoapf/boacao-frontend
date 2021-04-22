import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/sign-in" exact>
					<Login />
				</Route>
				<Route path="/sign-up">
					<Register />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
