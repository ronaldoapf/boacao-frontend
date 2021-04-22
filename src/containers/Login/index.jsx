import React, { useCallback, useEffect, useState } from 'react';
import * as yup from 'yup';
import Helmet from 'react-helmet';
import { Formik, Form } from 'formik';
import schema from './validationSchema';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Background from '../../assets/background.png';
import { getUsers, getUsersByID }  from '../../services/user';
import styles from './styles.module.scss';

const Login = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
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
						onSubmit={values => console.log(values)}
					>
						{({ values }) => (
							<Form>
								<Input
									name="email"
									label="E-mail"
									type="email"
								/>
								<Input
									name="password	"
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