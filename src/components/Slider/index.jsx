import PropTypes from 'prop-types';

import { Slider as SliderComponent } from './style.js';

const Slider = ({ children, height }) => {
  return (
    <SliderComponent height={height}>
      {children}
    </SliderComponent>
  );
}

Slider.propTypes = {
  children: PropTypes.object,
  height: PropTypes.string
}

export default Slider;