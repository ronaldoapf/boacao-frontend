import { 
	useState, 
	useContext 
} from 'react';
import * as yup from 'yup';
import Helmet from 'react-helmet';
import { Formik, Form } from 'formik';
import { Link, useHistory } from 'react-router-dom';

import schema from './validationSchema';
import Logo from 'components/Logo';
import Input from 'components/Input';
import Modal from 'components/Modal';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Background from 'assets/background.png';
import { ToastContainer } from 'react-toastify';

import useAuth from 'contexts/AuthContext/useAuth';

import styles from './styles.module.scss';

import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
	const [open, setOpen] = useState(false);
	const [local, setLocal] = useState(false);
	const [category, setCategory] = useState([])
	const [redirect, setRedirect] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();
  const { signIn, authenticated } = useAuth();
	
	const handleSubmit = (values) => {
		setIsLoading(true);
		setTimeout(() => {
			signIn(values, history);
		}, 500);
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
						initialValues={{
							email: 'ronaldo.alves.1997@gmail.com',
							password: '12345'
						}}
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