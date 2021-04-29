import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

import { ContainerCheckbox } from './styles';

const Checkboxes = ({ color, label }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <ContainerCheckbox>
      <Checkbox
        color={color}
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <label>{label}</label>
    </ContainerCheckbox>
  );
}

Checkboxes.propTypes = {
  color: PropTypes.string.required,
  label: PropTypes.string
}

Checkboxes.defaultProps = {
  color: 'primary'
}

export default Checkboxes;