import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Input = ({type, label, name, placeholder, value}) => {
	return (
		<>
			<div className={styles.containerInput}>
				<label>{label}</label>
				<input type={type} name={name} value={value} placeholder={placeholder}/>
			</div>
		</>
	);
};

export default Input;

Input.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string
};