import { memo, useRef } from 'react';
import PropTypes from 'prop-types';

import { InputContainer } from './style';
import withField from '../Field/withField';

const TextArea = ({
	type,
	name,
	value,
	label,
	error,
	onChange,
	...props
}) => (
	<>
		<InputContainer value={value} error={error}>
			<label>{label}</label>
			<textarea 
        type={type} 
        name={name} 
        value={value} 
        onChange={onChange} 
        {...props}
      />
		</InputContainer>
	</>
)

TextArea.propTypes = {
	error: PropTypes.bool,
	type: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	placeholder: PropTypes.string,
};

export default withField(memo(TextArea));

