import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useAuth from 'contexts/AuthContext/useAuth';

import Logo from '../Logo';
import Container from '../Container';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import { Header as HeaderContainer } from './style.js';

const Header = () => {
	const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { signOut, userData, authenticated } = useAuth();
  
  return (
    <Container>
      <HeaderContainer>
        <Link to="/">
          <Logo />
        </Link>
        
        <ul>
          {!authenticated ? (
            <li className="headerItem">
              <Link to="/sign-in">
                <PersonOutlineIcon />
                Entrar
              </Link>
            </li>
          ) : (
            <>
            {/* <li className="headerItem">
              <Link to="/donations">
                Minhas doações
              </Link>
            </li> */}
              <li className="userDropdown headerItem" onClick={() => setIsOpen(!isOpen)}>
                <PersonOutlineIcon />
                <span>
                  {userData?.name}
                </span>
                <figure className="chevron">
                  <KeyboardArrowDownIcon />
                </figure>
              </li>

              <Dropdown isOpen={isOpen}/>
            </>
          )}

          <li className="headerItem">
            <Button 
              onClick={() => history.push('/donate')} 
              variant="filled"
            >
              Doar
            </Button>
          </li>
        </ul>
      </HeaderContainer>
    </Container>
  );
};

export default Header; 