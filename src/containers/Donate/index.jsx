import React, { useEffect, useState, useContext } from 'react'
import { Formik, Form } from 'formik';

import Helmet from 'react-helmet';
import Input from 'components/Input';
import Button from 'components/Button';
import Header from 'components/Header';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import Container from 'components/Container';
import Checkboxes from 'components/Checkboxes';
import PhotoUploader from 'components/PhotoUploader';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import schema from './validationSchema';
import DonationApi from 'commons/resources/api/donation';
import CategoryApi from 'commons/resources/api/category';

import { ContainerDonation } from './styles'
import Loader from 'components/Loader';
import { responsiveFontSizes } from '@material-ui/core';
import { toast, ToastContainer } from 'react-toastify';

const Donate = () => {
  const [local, setLocal] = useState(false);
	const [category, setCategory] = useState([])
  const [isChecked, setIsChecked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);


	useEffect(() => {
		CategoryApi.listCategories().then(response => {
			const { data } = response;
			
			const getCategories = data.map(category => {
				return {
					value: category.id,
					label: category.title, 
				}
			})
			setCategory(getCategories);
		}).catch(error => {
			console.log(error)
		})
	}, []);

	const handleSubmit = (values) => {
		console.log(values);
			DonationApi.createDonation(values, null).then(response => {
				const { data, status, statusText } = response;
				if(data) toast.success('Doação cadastrada com sucesso');
				console.log({response, data})
			}).catch(error => {
				const { response } = error;
				console.log({error, response})
			});
	}

  return (
    <>
			<Loader isLoading={isLoading}/>
			<ToastContainer />
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
						validationSchema={schema}
						onSubmit={handleSubmit}
					>
						{({ values }) => (
							<Form encType="multipart/form-data">
								<Input
									type="text"
									name="title"
									label="Título"
								/>
								<TextArea 
									label="Descrição"
									name="description"
								/>
                <Select
									type="text"
									name="categoryId"
									label="Categoria"
									options={category}
									icon={KeyboardArrowDownIcon}
								/>
                <Checkboxes 
									label="Usar minha localização como endereço"
									isChecked={setIsChecked}
								/>
								{!isChecked && 
									<>
										<Input
											name="cep"
											type="text"
											label="CEP"
										/>

										<Input
											type="text"
											name="state"
											label="Estado"
										/>
									</>
								}
								<PhotoUploader maxFiles={1} type="string" name="file" />
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

export default Donate;