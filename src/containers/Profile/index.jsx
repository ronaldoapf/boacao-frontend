import React, { useState } from 'react';

import { Form, Formik } from 'formik';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Filter from '../../assets/filter.svg';
import Sidebar from '../../components/Sidebar';
import Container from '../../components/Container';
import Assignment from '../../assets/assignment.png';
import GuardaRoupa from '../../assets/guardaRoupa.jpg';
import EditIcon from '../../assets/edit.svg';
import DeleteIcon from '../../assets/delete.svg';

import { 
  ContainerProfile,
  UserInformation,
  UserDonation,
  CardDonation,
  InfoDonation, 
  OptionsDonation,
  HeaderDonation
} from './style';

const Profile = () => {

  const [filter, setFilter] = useState(false);
  
  const handleFilter = () => {
    setFilter(true);
  } 

  return (
    <>
      <Sidebar open={filter}/>
      <Header />
      <Container>
        <ContainerProfile>
          <UserInformation>
            <h1>Meu Perfil</h1>
            <Formik
                initialValues={{}}
                validationSchema={null}
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
                )}
              </Formik>
          </UserInformation>
          <UserDonation>
            <header>
              <h1>Minhas Doações</h1>
              <div>
                <button onClick={handleFilter}>
                  <img src={Filter} alt="Ícone de Filtro"/>
                </button>

                <Button variant="filled">
                  Nova Doação
                </Button>
              </div>
            </header>
            <CardDonation>
              <figure>
                <img src={GuardaRoupa} alt="" srcSet=""/>
              </figure>  
              <InfoDonation>
                <HeaderDonation>
                  <div>
                    <figure>
                      <img src={Assignment} alt="Ícone Categoria"/>
                    </figure>
                    <label>Móveis</label>
                  </div>
                  <h1>Guarda-roupas</h1>
                </HeaderDonation>
                <OptionsDonation>
                  <button>
                    <img src={EditIcon} alt=""/>
                  </button>
                  <button>
                    <img src={DeleteIcon} alt=""/>
                  </button>
                </OptionsDonation>
              </InfoDonation>
            </CardDonation>
          </UserDonation>
        </ContainerProfile>
      </Container>
    </>
  );
}

export default Profile;