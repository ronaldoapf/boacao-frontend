import {
  useState,
  useEffect, 
} from "react";

import { v4 as uuid } from 'uuid';
import { Form, Formik } from "formik";
import { useHistory } from 'react-router-dom';

import Helmet from 'react-helmet';

import Input from 'components/Input';
import Button from 'components/Button';
import Header from 'components/Header';
import BoxShadow from 'components/BoxShadow';
import Container from 'components/Container';
import PhotoUploader from 'components/PhotoUploader';

import UserApi from 'commons/resources/api/user';
import AvatarApi from 'commons/resources/api/avatar';
import DonationApi from 'commons/resources/api/donation';

import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';

import {
  Menu,
  MenuItem,
  UserInfo,
  TitleBox, 
  HeaderInfo,
  ProfileContainer,
} from "./style";

import { toast, ToastContainer } from "react-toastify";

import AddressForm from "templates/AddressForm";
import useAuth from 'contexts/AuthContext/useAuth';

const Profile = () => {

  const history = useHistory();
  const { token, userData } = useAuth();
  const [userDataUpdated, setUserDataUpdated] = useState(null);

  useEffect(() => {
    UserApi.listUser(userData.id)
    .then(response => {
      const { data } = response;
      if(data) setUserDataUpdated(data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])

  const handleSubmitData = (values) => {
    const formData = new FormData();
		const { file, ...rest } = values ?? {};

    file.map(item => {
			formData.append('file', item.file)
		})

    AvatarApi.create(formData).then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    }) 

		formData.append('data', JSON.stringify(rest))

    UserApi.updateData(formData, userData.id)
      .then(response => {
        const { data } = response;

        if(data) toast.success('Alterações realizadas com sucesso');
      })
      .catch(err => {
        const { response } = err;
        if(response.data.message === 'Passwords must match') toast.error('As senhas devem ser iguais');
      })
  }

  return (
    <>
      <Helmet>
        <title>Perfil | Boação</title>
      </Helmet>
      <Header />
      <ProfileContainer>
        <Container>
          <Menu>
            <ul>
              <a href="#dados">
                <MenuItem>
                  <ListAltIcon />
                  Dados da conta
                </MenuItem>
              </a>
              <a href="#endereco">
                <MenuItem>
                  <HomeIcon />
                  Endereço
                </MenuItem>
              </a>
            </ul>
          </Menu>
          <UserInfo>
            <HeaderInfo>
              <h1>Meu cadastro</h1>
              <span>Edite suas informações</span>
            </HeaderInfo>

            <div style={{ "width": "70%" }}>
              <BoxShadow>
                <TitleBox id="dados">Dados da conta</TitleBox>
                <Formik
                    initialValues={{
                      file: [
                        ...(userDataUpdated?.avatar?.url ? [{
                          preview: userDataUpdated?.avatar?.url,
                          uuid: uuid(),
                        }] : [])
                      ],
                      name: userDataUpdated?.name,
                      email: userDataUpdated?.email,
                      phone: userDataUpdated?.phone,
                    }}
                    validationSchema={null}
                    onSubmit={handleSubmitData}
                    enableReinitialize
                  >
                    {({ values }) => {
                      return (
                        <Form>
                          <PhotoUploader maxFiles={1} name="file" />
                          <Input
                            name="name" 
                            label="Nome completo" 
                            type="text" 
                          />
                          <Input 
                            name="email" 
                            label="Email" 
                            type="email" 
                          />
                          <Input
                            name="phone"
                            label="Telefone para contato"
                            type="text"
                          />
                          <Input
                            name="password"
                            label="Alterar senha"
                            type="password"
                          />
                          <Input
                            name="passwordConfirmation"
                            label="Confirmar nova senha"
                            type="password"
                          />
                        </Form>
                      )}}
                  </Formik>
              </BoxShadow>
            </div>

            <div style={{ "width": "70%" }}>
              <BoxShadow>
                <TitleBox id="endereco">Endereço</TitleBox>
                <Formik
                  initialValues={{
                    address: {
                      uf: userDataUpdated?.address?.uf,
                      cep: userDataUpdated?.address?.cep,
                      city: userDataUpdated?.address?.city,
                      number: userDataUpdated?.address?.number,
                      address: userDataUpdated?.address?.address,
                      reference: userDataUpdated?.address.reference,
                      additional: userDataUpdated?.address?.additional,
                      neighborhood: userDataUpdated?.address?.neighborhood,
                    }
                  }}
                  validationSchema={null}
                  onSubmit={handleSubmitData}
                  enableReinitialize
                >
                  {({ values }) => {
                    return (
                      <Form>
                        <AddressForm />
                        <Button type="submit" variant="filled">
                          Salvar
                        </Button>
                      </Form>
                    )}}
                </Formik>
              </BoxShadow>
            </div>

          </UserInfo>
        </Container>
      </ProfileContainer>
    </>
  );
};

export default Profile;
