import { Link, useHistory } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


import { 
  Menu, 
  MenuItem, 
  Separator, 
  DropdownContainer
} from './style';

const Dropdown = ({ isOpen, signOut }) => {

	const history = useHistory();

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