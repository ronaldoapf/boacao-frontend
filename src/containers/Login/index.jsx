import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Background from '../../assets/background.png';
import { getUsers, getUsersByID }  from '../../services/user';
import styles from './styles.module.scss';
import Select from '../../components/Select'

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
				<Logo />

				<Formik
					initialValues={{}}
					validationSchema={yup.object().shape({
						test: yup.string().required()
					})}
					onSubmit={values => console.log(values)}
				>
					{({ values }) => (
						<Form>
							{console.log({ values })}
							<Input
								name="test"
								label="Teste"
							/>
							<Select
								name="select"
								label="Teste Select"
								options={[{ value: 1, label: 'Franco'}, { value: 2, label: 'Ronaldo' }]} 
							/>
							<Button variant="filled" type="submit">
								Entrar
							</Button>
						</Form>
					)}
				</Formik>
			</div>
			<figure className={styles.background}>
				<img src={Background} alt="Imagem de fundo"/>
			</figure>
		</section>
	);
};

export default Login;