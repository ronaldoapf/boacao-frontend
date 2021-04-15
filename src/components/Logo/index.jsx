import React from 'react';
import ImageLogo from '../../assets/logo_preto_branco.svg';

const Logo = () => {
	return (
		<figure>
			<img width="250px" height="80px" src={ImageLogo} alt="Logo boação"/>
		</figure>
	);
};

export default Logo;