import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from 'containers/Home';
import Login from 'containers/Login';
import Profile from 'containers/Profile';
import Sandbox from 'containers/Sandbox';
import PrivateRoute from './PrivateRoute';
import Donation from 'containers/Donate';
import Donate from 'containers/Donation';
import Register from 'containers/Register';
import PageNotFound from 'containers/PageNotFound';
import AuthProvider from 'contexts/AuthContext';
import useAuth from 'contexts/AuthContext/useAuth';
const Routes = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/donate">
            <Donation />
          </Route>
          <Route path="/donation">
            <Donate />
          </Route>
          <Route path="/sandbox">
            <Sandbox />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routes;