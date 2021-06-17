import { useState } from 'react';
import PropTypes from 'prop-types';
import MUICheckbox from '@material-ui/core/Checkbox';

import { ContainerCheckbox } from './styles';
import withField from 'components/Field/withField';

const Checkbox = ({ color, label, name, value, setFieldValue }) => {
  return (
    <ContainerCheckbox>
      <MUICheckbox
        color={color}
        isChecked={value}
        onChange={(_, checked) => {
          setFieldValue(name, checked) 
        }}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <label>{label}</label>
    </ContainerCheckbox>
  );
}

Checkbox.propTypes = {
  color: PropTypes.string.required,
  label: PropTypes.string,
  isChecked: PropTypes.func,
}

Checkbox.defaultProps = {
  color: 'primary'
}

export default withField(Checkbox);