import { Link, useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import useAuth from 'contexts/AuthContext/useAuth';

import { 
  Menu, 
  MenuItem, 
  Separator, 
  DropdownContainer
} from './style';

const Dropdown = ({ isOpen }) => {

	const history = useHistory();
  const { signOut, userData, authenticated } = useAuth();

  if(!isOpen) return null; 

  return (
    <DropdownContainer>
      <Menu>
        <MenuItem onClick={() => history.push('/profile')}>
          <figure>
            <PersonOutlineIcon />
          </figure>
          <span>Meu cadastro</span>
        </MenuItem>
        <Separator />
        <MenuItem onClick={signOut}>
          <figure>
            <ExitToAppIcon />
          </figure>
          <span>Sair</span> 
        </MenuItem>
      </Menu>
    </DropdownContainer>
  );
};

export default Dropdown;