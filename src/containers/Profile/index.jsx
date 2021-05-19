import { useEffect, useState, useContext } from "react";
import { Form, Formik } from "formik";
import { history, useHistory } from 'react-router-dom';

import Loader from 'components/Loader';
import Input from "components/Input";
import Header from "components/Header";
import Button from "components/Button";
import Filter from "assets/filter.svg";
import Sidebar from "components/Sidebar";
import Container from "components/Container";
import Assignment from "assets/assignment.png";
import GuardaRoupa from "assets/guardaRoupa.jpg";
import PhotoUploader from "components/PhotoUploader";
import EditIcon from "assets/edit.svg";
import DeleteIcon from "assets/delete.svg";

import UserApi from 'commons/resources/api/user';
import DonationApi from 'commons/resources/api/donation';

import {
  ContainerProfile,
  UserInformation,
  DonationsList,
  CardDonation,
  InfoDonation,
  OptionsDonation,
  HeaderDonation,
} from "./style";
import { toast, ToastContainer } from "react-toastify";

import useAuth from 'contexts/AuthContext/useAuth';

const Profile = () => {
  const [filter, setFilter] = useState(false);
  const [userDonations, setUserDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { token, userData } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const { id } = userData;
    DonationApi.listDonations(id).then(response => {
      const { data } = response;
      setUserDonations(data);
    })
  }, [])

  const handleFilter = () => {
    setFilter(true);
  };

  const handleSubmitData = (values) => {
    UserApi.updateData(values, userData.id)
      .then(response => {
        const { data } = response;

        if(data) toast.success('Alterações realizadas com sucesso');
      })
      .catch(err => {
        const { response } = err;
        console.log(response);
        if(response.data.message === 'Passwords must match') toast.error('As senhas devem ser iguais');
      })
  }

  const editDonation = () => {
    alert("Edit donation");
  }

  const deleteDonation = (id) => {
    DonationApi.deleteDonation(id)
      .then(response => {
        const { data } = response;
        if(data.message === 'Donation paused') toast.success('Doação finalizada com sucesso'); 
        console.log(response)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  return (
    <>
      <Loader isLoading={isLoading}/>
      <ToastContainer />
      <Sidebar open={filter} onClose={() => setFilter(false)}/>
      <Header />
      <Container>
        <ContainerProfile>
          <UserInformation>
            <h1>Meu Perfil</h1>
            <Formik
              initialValues={{
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
              }}
              validationSchema={null}
              onSubmit={handleSubmitData}
              enableReinitialize
            >
              {({ values }) => {
                return (
                <Form>
                  <PhotoUploader maxFiles={1} name="photos" />
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
                  <Button type="submit" variant="filled">
                    Salvar
                  </Button>
                </Form>
                )}}
            </Formik>
          </UserInformation>
          <DonationsList>
            <header>
              <h1>Minhas Doações</h1>
              <div>
                <button onClick={handleFilter}>
                  <img src={Filter} alt="Ícone de Filtro" />
                </button>

                <Button variant="filled" onClick={() => history.push("/donate")}>
                  Nova Doação
                </Button>
              </div>
            </header>
            {userDonations?.length === 0 && (
              <h1>
                O usuário não tem doações cadastradas
              </h1>
            )}
            {userDonations.map(donation => {
              return (
                <>
                <CardDonation key={donation.id}>
                  <figure>
                    <img src={GuardaRoupa} />
                  </figure>
                  <InfoDonation>
                    <HeaderDonation>
                      <div>
                        <img src={Assignment} alt="Ícone da Categoria" />
                        <label>Móveis</label>
                      </div>
                      <h1>Guarda Roupa</h1>
                    </HeaderDonation>
                  </InfoDonation>

                  <OptionsDonation>
                    <button onClick={editDonation}>
                      <figure>
                        <img src={EditIcon} alt="Edição da doação" />
                      </figure>
                    </button>

                    <button onClick={() => deleteDonation(donation.id)}>
                      <figure>
                        <img src={DeleteIcon} alt="Edição da doação" />
                      </figure>
                    </button>
                  </OptionsDonation>
                </CardDonation>
                </>
              );
            })}
          </DonationsList>
        </ContainerProfile>
      </Container>
    </>
  );
};

export default Profile;
