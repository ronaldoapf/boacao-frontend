import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from 'contexts/AuthContext';
import useAuth from 'contexts/AuthContext/useAuth';

import Home from 'containers/Home';
import Login from 'containers/Login';
import Donate from 'containers/Donate';
import Profile from 'containers/Profile';
import Sandbox from 'containers/Sandbox';
import Register from 'containers/Register';
import Donation from 'containers/Donation';
import MyDonations from 'containers/MyDonations';
import PageNotFound from 'containers/PageNotFound';
import UserDonation from 'containers/UserDonation';
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
          <Route 
            path="/user/:id" 
            component={UserDonation} 
          />
          <PrivateRoute 
            path="/donate" 
            component={Donate}
          />
          <PrivateRoute 
            path="/profile" 
            component={Profile} 
          />
          <PrivateRoute 
            path='/donations'
            component={MyDonations}
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
