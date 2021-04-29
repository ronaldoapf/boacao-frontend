import React, { useCallback, useEffect, useState } from 'react';
import * as yup from 'yup';
import Helmet from 'react-helmet';
import { Formik, Form } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import schema from './validationSchema';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Background from '../../assets/background.png';
import { ToastContainer, toast } from 'react-toastify';
import AuthApi from '../../commons/resources/api/auth';

import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const [open, setOpen] = useState(false);
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = (values) => {
		AuthApi.login(values).then(response => {
			const { token, user } = response.data
			setRedirect({to: '/donate', state: true});
			if(token) localStorage.setItem('token', token)
			if(user) localStorage.setItem('nameUser', user.name); 
		}).catch(error => {
			const { response } = error;
			const message = response.data.message;
			if(message === 'User or password are incorrect') toast.error('E-mail ou senha inválidos');
		});
	}	

	return (
		<>
			<ToastContainer />
			{redirect.state && <Redirect to={redirect.to}/>}
			{open && (
				<Modal setOpen={setOpen}>
        <div className={styles.contentModal}>
          <h1>Recuperação de senha</h1>
          <p>
            Por favor, informe seu e-mail para proceder com a recuperação de senha.
          </p>

          <Formik
						initialValues={{}}
						validationSchema={null}
						onSubmit={values => console.log(values)}
					>
						{({ values }) => (
							<Form>
								<Input
									name="email"
									label="E-mail"
									type="email"
								/>
								<Button variant="filled" type="submit">
									Entrar
								</Button>
							</Form>
						)}
					</Formik>

        </div>
      </Modal>
			)}
			<Helmet>
				<title>Login | Boação</title>
			</Helmet>
			<section className={styles.loginPage}>
				<div className={styles.containerLogin}>
					<Logo />
					<Formik
						initialValues={{}}
						validationSchema={schema}
						onSubmit={handleSubmit}
					>
						{({ values }) => (
							<Form>
								<Input
									name="email"
									label="E-mail"
									type="email"
								/>
								<Input
									name="password"
									label="Senha"
									type="password"
								/>
								<Button variant="filled" type="submit">
									Entrar
								</Button>

								<div className={styles.more}>
									<p>
										<Link to="/sign-up">
												Quer se cadastrar
										</Link>
										{' '} ou {' '}
										<button 
											className={styles.buttonModal}
											onClick={() => setOpen(true)}
											type="button"	
										>
											esqueceu sua senha
										</button>
										 ?
									</p>
								</div>
							</Form>
						)}
					</Formik>
				</div>
				<figure className={styles.background}>
					<img src={Background} alt="Imagem de fundo"/>
				</figure>
			</section>
		
		</>
	);
};

export default Login;