import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const TextArea = ({label}) => {
	return (
		<div className={styles.textAreaContainer}>
			<label>{label}</label>
			<textarea type="text" />
		</div>
	);
};

export default TextArea;

TextArea.propTypes = {
	label: PropTypes.string
};