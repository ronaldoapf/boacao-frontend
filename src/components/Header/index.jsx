import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'; 
import { Link, useHistory } from 'react-router-dom';

import useAuth from 'contexts/AuthContext/useAuth';

import Logo from 'components/Logo';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';



import { 
  Options,
  HeaderChild, 
  OptionsHeader, 
  HeaderContainer, 
} from './style';


const Header = () => {
  
	const history = useHistory();
  const [dropdown, setDropdown] = useState(false);
  const { signOut, userData, authenticated } = useAuth();

  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

  return (
    <>
      <HeaderContainer>
        <HeaderChild>
          <Link to="/">
            <Logo />
          </Link>
          <OptionsHeader>
            {!isMobile ? (
              <>
                {authenticated ? (
                  <>
                  <Options onClick={() => history.push('/donations')}>
                    Minhas doações
                  </Options>
                  <Options className="" onClick={() => setDropdown(!dropdown)}>
                    <AccountCircleIcon />
                    <span>
                      Ronaldo Alves
                    </span>
                    <KeyboardArrowDownIcon />
                    <Dropdown 
                      isOpen={dropdown} 
                      signOut={signOut}
                    />
                  </Options>
                  </>
                ) : (
                  <Options onClick={() => history.push('/sign-in')}>
                    <AccountCircleIcon />
                    <span>
                      Entrar
                    </span>
                  </Options>
                )}
                <Options onClick={() => history.push('/donate')}>
                  <Button variant="filled">
                    Doar
                  </Button>
                </Options> 
              </>
            ) : (
              <MenuIcon />
            )}
          </OptionsHeader>
        </HeaderChild>
      </HeaderContainer>
    </>
  )
};


export default Header;