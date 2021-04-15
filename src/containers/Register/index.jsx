import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../assets/background.png';
import Logo from '../../components/Logo';
import styles from './styles.module.scss';

const Register = () => {
	return (
		<section className={styles.registerPage}>
			<div className={styles.containerRegister}>
				<Logo />
				<form>
					<Input label="Nome completo" name="name" type="text" />
					<Input label="E-mail" name="email" type="email" />
					<Input label="Telefone para contato" name="phone" type="text" />
					<Input label="Senha" name="password" type="password" />
					<Input label="Confirmar senha" name="confirmPassword" type="text" />
					<Button variant="filled">
            Cadastrar
					</Button>
					<div className={styles.more}>
						<p>
							<Link to="/login">
                Já possui conta?
							</Link>
						</p>
					</div>
				</form>
			</div>
			<figure>
				<img src={Background} alt="Imagem de fundo"/>
			</figure>
		</section>
	);
};

export default Register;