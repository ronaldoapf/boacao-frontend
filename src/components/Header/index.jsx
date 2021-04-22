import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import Container from '../Container';
import { Header as HeaderContainer } from './style.js';

const Header = () => {
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
          <li>
            <Link to="/sign-in">
              Entrar
            </Link>
          </li>
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default Header; 