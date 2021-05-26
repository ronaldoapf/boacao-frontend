import { useState } from 'react';
import * as yup from 'yup';
import Helmet from 'react-helmet';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import schema from './validationSchema';
import { Redirect } from 'react-router-dom';

import Logo from 'components/Logo';
import Input from 'components/Input';
import Select from 'components/Select'
import Button from 'components/Button';
import Loader from 'components/Loader';
import Background from 'assets/background.png';
import UserApi from 'commons/resources/api/user'
import { ToastContainer, toast } from 'react-toastify';

import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
	const [redirect, setRedirect] = useState(false)
	const [isLoading, setIsLoading] = useState(false);
	
	const handleSubmit = (values) => {
		setIsLoading(true);1
		UserApi.create(values).then(response => {
			const user = response.data.user;
			if(user) toast.success('Usuário cadastrado com sucesso! Faça seu login');
			
			setTimeout(() => {
				setRedirect(true);
			}, 2000);

		}).catch(error => {
			const { response } = error;
			const message = response.data.message;
			if(message === 'Email already exists') toast.error('E-mail de usuário já cadastrado no sistema');
		});
	}

	return (
		<>
			<Loader isLoading={isLoading} />
			<Helmet>
				<title>Cadastro | Boação</title>
			</Helmet>
			
			<ToastContainer />
			{redirect && <Redirect to="/sign-in" />}
			<section className={styles.registerPage}>
				<div className={styles.containerRegister}>
					<Logo />
				<Formik
					initialValues={{}}
					validationSchema={schema}
					onSubmit={handleSubmit}
				>
					{({ values }) => (
						<Form>
							<Input
								name="name"
								label="Nome completo"
								type="text"
							/>
							<Input
								name="email"
								label="E-mail"
								type="email"
							/>
							<Input
								name="phone"
								label="Telefone para contato"
							/>
							<Input
								name="password"
								label="Senha"
								type="password"
							/>
							<Input
								name="passwordConfirmation"
								label="Confirmar senha"
								type="password"
							/>
							<Button variant="filled" type="submit">
								Cadastrar
							</Button>

							<Link to="/sign-in">
								Já possui conta?
							</Link>
						</Form>
					)}
				</Formik>
				</div>
				<figure>
					<img src={Background} alt="Imagem de fundo"/>
				</figure>
			</section>
		</>
	);
};

export default Register;