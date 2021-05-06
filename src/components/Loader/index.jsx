import React from 'react';
import PropTypes from 'prop-types';

import Spin from '../../assets/spin.svg'
import { ContainerLoader } from './style'

const Loader = ({ isLoading }) => {

  if(!isLoading) return null;

  return (
    <ContainerLoader>
      <figure>
        <img src={Spin} />
      </figure>
    </ContainerLoader>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.func,
}
export default Loader;