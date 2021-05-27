import {
  useEffect, 
  useState
} from "react";
import get from 'lodash.get';
import { Form, Formik } from "formik";
import { history, useHistory } from 'react-router-dom';

import Modal from 'components/Modal';
import Input from 'components/Input';
import Loader from 'components/Loader';
import Header from 'components/Header';
import Button from 'components/Button';
import Sidebar from 'components/Sidebar';
import Container from 'components/Container';
import PhotoUploader from 'components/PhotoUploader';

import Filter from 'assets/filter.svg';
import EditIcon from 'assets/edit.svg';
import DeleteIcon from 'assets/delete.svg';
import Assignment from 'assets/assignment.png';

import UserApi from 'commons/resources/api/user';
import AvatarApi from 'commons/resources/api/avatar';
import DonationApi from 'commons/resources/api/donation';

import styles from './styles.module.scss';

import {
  InfoDonation,
  CardDonation,
  DonationsList,
  HeaderDonation,
  UserInformation,
  OptionsDonation,
  ContainerProfile,
} from "./style";

import { toast, ToastContainer } from "react-toastify";

import useAuth from 'contexts/AuthContext/useAuth';

const Profile = () => {
  const [filter, setFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userDonations, setUserDonations] = useState([]);
  const [modalToDelete, setModalToDelete] = useState(false);
  const [donationToDelete, setDonationToDelete] = useState(null);


  const history = useHistory();
  const { token, userData } = useAuth();
  console.log(userData);
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
    console.log(values);
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

  const editDonation = () => {
    alert("edit donation");
  }

  const renderModalToDelete = (id) => {
    setModalToDelete(true);
    setDonationToDelete(id);
  }

  const deleteDonation = (id) => {
    setModalToDelete(false);
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
      <Modal isOpen={modalToDelete} onClose={() => setModalToDelete(false)}>
        <div className={styles.contentModal}>
          <h1>
            Excluir doação
          </h1>

          <p>
            Deseja realmente excluir essa doação?
          </p>

          <div>
            <Button variant="outlined" onClick={() => setModalToDelete(false)}>
              Cancelar
            </Button>

            <Button variant="filled" onClick={() => deleteDonation(donationToDelete)}>
              Excluir
            </Button>
          </div>
        </div>
      </Modal>
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
                file: [{
                  url: userData.avatar?.url
                }],
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
                    <img src={get(donation, ['files', '0', 'url'], '')} />
                  </figure>
                  <InfoDonation>
                    <HeaderDonation>
                      <div>
                        <img src={Assignment} alt="Ícone da Categoria" />
                        <label>{donation?.category.title}</label>
                      </div>
                      <h1>{donation?.title}</h1>
                    </HeaderDonation>
                  </InfoDonation>

                  <OptionsDonation>
                    <button onClick={editDonation}>
                      <figure>
                        <img src={EditIcon} alt="Edição da doação" />
                      </figure>
                    </button>

                    <button onClick={() => renderModalToDelete(donation.id)}>
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
