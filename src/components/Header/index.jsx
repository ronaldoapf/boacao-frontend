import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo';
import Container from '../Container';
import { Header as HeaderContainer } from './style.js';

const Header = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) console.log(token)
    const nameUser = localStorage.getItem('nameUser');
    setUsername(nameUser?.split(' ')['0']);
  }, [])

  const closeSession = () => {
    const token = localStorage.getItem('token')
  }
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
          {username ? (
            <>
              <li>
                Olá, {username}
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