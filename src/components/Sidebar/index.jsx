import React from 'react';
import PropTypes from 'prop-types';
import { ContainerSidebar } from './style';

const Sidebar = ({open}) => {

  if(!open) return null;

  return (
    <ContainerSidebar>
      <h1>
        Ordenar
      </h1>
    </ContainerSidebar>
  );
}

Sidebar.propTypes = {
  open: PropTypes.func
}

export default Sidebar;