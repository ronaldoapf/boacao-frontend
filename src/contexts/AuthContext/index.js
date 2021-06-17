import { 
  useState, 
  useEffect, 
  useCallback, 
  createContext,
} from 'react';
import PropTypes from 'prop-types';
import Storage from 'utils/Storage';
import AuthApi from 'commons/resources/api/auth';
import { toast } from 'react-toastify';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = Storage.get('@User');
    setUserData(user);
  }, []);

  const signIn = useCallback((payload, history) => {
    AuthApi.signIn(payload)
      .then(response => {
        const { data } = response;
        const token = data.token;
        const user = data.user;
        Storage.set('@Token', `Bearer ${token}`);
        Storage.set('@User', JSON.stringify(user));
        setUserData(user);
        history.push('/profile');
      })
      .catch(err => {
        const { response } = err;
        const message = response.data.message;
        if(message === 'User or password are incorrect') toast.error('Usuário ou senha incorretos');
      });
  }, [])

  const signOut = useCallback(() => {
    Storage.delete('@Token');
    Storage.delete('@User');
    setUserData(null);
    toast.success('Logout realizado com sucesso');
  }, [])

  return (
    <AuthContext.Provider 
      value={{
        signIn,
        signOut,
        userData,
        authenticated: Boolean(userData)
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any,
}

export { AuthContext };
export default AuthProvider;