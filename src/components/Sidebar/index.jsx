import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@material-ui/icons/Close';

import { 
  ContainerSidebar,
  HeaderSidebar
} from './style';

const Sidebar = ({ open, onClose }) => {

  if(!open) return null;

  return (
    <ContainerSidebar>
      <HeaderSidebar>
        <h1>
          Ordenar
        </h1>
      
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </HeaderSidebar>
    </ContainerSidebar>
  );
}

Sidebar.propTypes = {
  open: PropTypes.func,
  onClose: PropTypes.func,
}

export default Sidebar;