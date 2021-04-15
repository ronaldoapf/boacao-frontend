import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../assets/background.png';
import Logo from '../../components/Logo';
import { getUsers, getUsersByID }  from '../../services/user';
import styles from './styles.module.scss';

const Login = () => {
	const [user, setUser] = useState({});

	useEffect(() => {
		getUsersByID(1).then(response => {
			setUser(response.data)
		}).catch(error => {
			console.log(error)
		}) 
	}, [])

	return (
		<section className={styles.loginPage}>
			<div className={styles.containerLogin}>
				{/* <pre>
					{JSON.stringify(user, null, 1)}
				</pre> */}
				<Logo />
				<form>
					<Input label="E-mail" name="email" type="email" />
					<Input label="Senha" name="password" type="password" />
					<Button variant="filled">
							Entrar
					</Button>
					<div className={styles.more}>
						<p>
							<Link to="/registrar">
									Quer se cadastrar
							</Link>
							{' '} ou {' '}
							<Link to="/ajuda">
									precisa de ajuda
							</Link> ?
						</p>
					</div>
				</form>
			</div>
			<figure className={styles.background}>
				<img src={Background} alt="Imagem de fundo"/>
			</figure>
		</section>
	);
};

export default Login;