import React, { memo, useRef } from 'react';
import PropTypes from 'prop-types';

import { InputContainer } from './style';
import withField from '../Field/withField';

const Input = ({
	type,
	name,
	icon: IconComponent,
	value,
	label,
	error,
	onChange,
	isSelect,
	...props
}) => (
	<>
		<InputContainer value={value} isSelect={isSelect} error={error}>
			<label>{label}</label>
			<input type={type} name={name} value={value} onChange={onChange} {...props} />
			{IconComponent && <IconComponent />}
		</InputContainer>
	</>
)

Input.propTypes = {
	icon: PropTypes.func,
	error: PropTypes.bool,
	type: PropTypes.string,
	name: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	isSelect: PropTypes.bool,
	placeholder: PropTypes.string,
};

export default withField(memo(Input));

