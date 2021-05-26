import { 
  useState, 
  useEffect, 
} from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import Container from '../Container';
import { 
  Header as HeaderContainer, 
  ExitButton
} from './style.js';
import Storage from 'utils/Storage';
import useAuth from 'contexts/AuthContext/useAuth';
import { SingleBedTwoTone } from '@material-ui/icons';

const Header = () => {
  const { signOut, userData, isLogged } = useAuth();

  const closeSession = () => {
    signOut();
  };

  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        <ul>
          <li>
            <Link to="/donate">
              Doar
            </Link>
          </li>
          <li>
            <Link to="/profile">
              Meu perfil
            </Link>
          </li>
          {isLogged ? (
            <>
              <li>
                <ExitButton onClick={closeSession}>
                  Sair
                </ExitButton>
              </li>
            </>
          ) : (
            <li>
              <Link to="/sign-in">
                Entrar
              </Link>
            </li>
          )}
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default Header; 