import React from 'react';
import * as yup from 'yup';
import Helmet from 'react-helmet';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import schema from './validationSchema';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Select from '../../components/Select'
import Button from '../../components/Button';
import Background from '../../assets/background.png';

import styles from './styles.module.scss';

const Register = () => {
	return (
		<>
			<Helmet>
				<title>Cadastro | Boação</title>
			</Helmet>
			
			<section className={styles.registerPage}>
				<div className={styles.containerRegister}>
					<Logo />
				<Formik
					initialValues={{}}
					validationSchema={schema}
					onSubmit={values => console.log(values)}
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
								type="number"
							/>
							<Input
								name="address"
								label="Telefone para contato"
								type="number"
							/>
							<Input
								name="phone"
								label="Telefone para contato"
								type="number"
							/>
							<Input
								name="password"
								label="Senha"
								type="password"
							/>
							<Input
								name="confirmPassword"
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