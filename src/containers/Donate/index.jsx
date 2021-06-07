import { useEffect, useState } from 'react'
import axios from 'axios';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom'; 

import Helmet from 'react-helmet';
import Input from 'components/Input';
import Button from 'components/Button';
import Header from 'components/Header';
import Select from 'components/Select';
import TextArea from 'components/TextArea';
import Container from 'components/Container';
import Checkbox from 'components/Checkbox';
import PhotoUploader from 'components/PhotoUploader';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import schema from './validationSchema';
import DonationApi from 'commons/resources/api/donation';
import CategoryApi from 'commons/resources/api/category';

import { ContainerDonation } from './styles'
import Loader from 'components/Loader';
import { toast, ToastContainer } from 'react-toastify';
import { HistoryOutlined } from '@material-ui/icons';
import AddressForm from 'templates/AddressForm';

const Donate = () => {
	
	const [local, setLocal] = useState(false);
	const [category, setCategory] = useState([])
	const [isLoading, setIsLoading] = useState(false);
	
	const history = useHistory();

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

	const handleSubmit = (values, { resetForm }) => {
		setIsLoading(true);
		const formData = new FormData()
		const { file, ...rest } = values ?? {}
		
		file.map(item => {
			formData.append('file', item.file)
		})
		formData.append('data', JSON.stringify(rest))
		DonationApi.createDonation(formData).then(response => {
			const { data, status, statusText } = response;
			if(data) {
				setIsLoading(false);
				resetForm();
				toast.success('Doação cadastrada com sucesso');
			}
		}).catch(error => {
			const { response } = error;
			console.log({error, response})
			if(response.data) toast.error('Não foi possível cadastrar a doação');
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
						initialValues={{
							cep: '',
							file: [],
							title: '',
							state: '',
							description: '',
							categoryId: null,
							sameRegisterAddress: false,
							deliveryAvailability: false,
						}}
						// validationSchema={schema}
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
								<Checkbox 
									label="Tenho disponibilidade para entrega"
									name="deliveryAvailability"
								/>
                <Checkbox 
									label="Usar meu endereço para a doação"
									name="sameRegisterAddress"
								/>
								{!values.sameRegisterAddress && 
										<AddressForm />
								}
								<PhotoUploader maxFiles={1} name="file" />
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