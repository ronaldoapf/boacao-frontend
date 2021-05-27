import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom'; 
import useAuth from 'contexts/AuthContext/useAuth';

const PrivateRoute = ({ ...rest }) => {
  const { authenticated } = useAuth();

  if(!authenticated) return <Redirect to={{pathname: "/sign-in"}} />
  return <Route {...rest} />
}

PrivateRoute.propTypes = {
  children: PropTypes.object,
  location: PropTypes.any
}

export default PrivateRoute;