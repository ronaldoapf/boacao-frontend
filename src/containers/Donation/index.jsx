import React, { useState } from 'react'
import { Formik, Form } from 'formik';

import Helmet from 'react-helmet';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Checkboxes from '../../components/Checkboxes';

import BrasilApi from '../../utils/brasilAPI'

import { ContainerDonation } from './styles'
const Donation = () => {
  const [local, setLocal] = useState(false);
  
  return (
    <>
			<Helmet>
				<title>Nova doação | Boação</title>
			</Helmet>
	    <Header />
      <Container>
        <ContainerDonation>
          <h1>
            Nova doação
          </h1>
          <Formik
						initialValues={{}}
						validationSchema={null}
						onSubmit={values => console.log(values)}
					>
						{({ values }) => (
							<Form>
								<Input
									name="title"
									label="Título"
									type="text"
								/>
                <Input
									name="description"
									label="Descrição"
									type="text"
								/>
                <Input
									name="category"
									label="Categoria"
									type="text"
								/>
                <Input
									name="cep"
									label="CEP"
									type="text"
								/>
                <Checkboxes label="Usar minha localização como endereço"/>
                <Input
									name="estado"
									label="Estado"
									type="text"
								/>
								<Button variant="filled" type="submit">
									Cadastrar doação
								</Button>
							</Form>
						)}
					</Formik>
        </ContainerDonation>
      </Container>
    </>
  );
}

export default Donation