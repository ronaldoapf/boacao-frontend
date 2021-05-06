import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Helmet from 'react-helmet';
import { Formik, Form } from 'formik';
import { Link, Redirect } from 'react-router-dom';
import schema from './validationSchema';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Background from '../../assets/background.png';

import { ToastContainer, toast } from 'react-toastify';
import AuthApi from '../../commons/resources/api/auth';
import User from '../../utils/Storage/user';

import styles from './styles.module.scss';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [redirect, setRedirect] = useState(false);
	const history = useHistory();

	const handleSubmit = (values) => {
		setIsLoading(true);
		setTimeout(() => {
			AuthApi.login(values).then(response => {
				const { token, user } = response.data;
				if(token) User.setToken(token);
				if(user) localStorage.setItem('nameUser', user.name); 
				history.push('/');
			}).catch(error => {
				const { response } = error;
				if(!response) {
					setIsLoading(false);
					toast.error('Desculpe, estamos com problemas em nossos servidores. Tente novamente mais tarde.');
					return;
				}
				const message = response.data.message;
				if(message === 'User or password are incorrect') toast.error('E-mail ou senha inválidos');
				setIsLoading(false);
			});
		}, 2000)
	}	

	return (
		<>
			<Loader isLoading={isLoading}/>
			<ToastContainer />
				<Modal isOpen={open} onClose={() => setOpen(false)}>
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