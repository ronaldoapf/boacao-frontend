import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './styles.module.scss';

const Button = ({onClick, children, type, variant}) => {
	return (
		<button 
			onClick={onClick} 
			type={type} 
			variant={variant}
			className={cx(
				{[styles.filled]: variant === 'filled'}, 
				{[styles.outlined]: variant === 'outlined'}
			)} 
		>
			{children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.any,
	type: PropTypes.string,
	variant: PropTypes.string
};
