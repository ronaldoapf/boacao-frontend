import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from 'contexts/AuthContext';
import useAuth from 'contexts/AuthContext/useAuth';

import Home from 'containers/Home';
import Login from 'containers/Login';
import Donate from 'containers/Donate';
import Sandbox from 'containers/Sandbox';
import Profile from 'containers/Profile';
import Register from 'containers/Register';
import Donation from 'containers/Donation';
import PageNotFound from 'containers/PageNotFound';
import PrivateRoute from "components/Routes/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route 
            path="/" 
            exact 
            component={Home}
          />
          <Route 
            path="/sign-in" 
            component={Login} 
          />
          <Route 
            path="/sign-up"
            component={Register} 
          />
          <Route 
            path="/donation/:id"
            component={Donation} 
          />
          <Route 
            path="/sandbox"
            component={Sandbox}
          />
          <PrivateRoute 
            path="/donate" 
            component={Donate}
          />
          <PrivateRoute 
            path="/profile" 
            component={Profile} 
          />
           <Route 
            component={PageNotFound} 
          />
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
