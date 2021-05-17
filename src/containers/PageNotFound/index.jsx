import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'components/Container';
import { NotFoundContent }  from './style';
import KeyboardBackspaceOutlinedIcon from '@material-ui/icons/KeyboardBackspaceOutlined';
import Logo from 'components/Logo';


const PageNotFound = () => {
  return (
      <Container>
        <NotFoundContent>
        <Logo />
          <h1>Error #404</h1>
          <h2>Página não encontrada</h2>
            <Link to="/">
              <KeyboardBackspaceOutlinedIcon />
              Voltar para Home
            </Link>
        </NotFoundContent>
      </Container>
  );
}

export default PageNotFound;