import React from 'react';
import PropTypes from 'prop-types';

import { Slider as SliderComponent } from './style.js';

const Slider = ({ children }) => {
  return (
    <SliderComponent>
      {children}
    </SliderComponent>
  );
}

Slider.propTypes = {
  children: PropTypes.object
}

export default Slider;