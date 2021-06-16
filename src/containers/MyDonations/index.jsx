import { useState, useEffect } from 'react';
import get from 'lodash.get';
import size from 'lodash.size';
import Helmet from 'react-helmet';
import { useHistory, Link } from 'react-router-dom';

import Header from 'components/Header';
import Container from 'components/Container';

import EditIcon from 'assets/svg/edit.svg';
import CheckIcon from 'assets/svg/check.svg';
import EmptyStateIcon from 'assets/svg/empty.svg';
import DeleteIcon from 'assets/svg/delete.svg';
import VisibilityIcon from 'assets/svg/visibility.svg';

import Assignment from 'assets/assignment.png';
import NotAvailable from 'assets/not-available.png'

import useAuth from 'contexts/AuthContext/useAuth';
import DonationApi from 'commons/resources/api/donation';

import { 
  Status,
  InfoCard,
  Separator,
  TitlePage,
  Donations,
  EmptyState,
  CardDonation,
  ActiveStatus,
  StatusDonation,
  DonationOptions,
  MyDonationsContainer 
} from './style';


const MyDonations = () => {

  const [userDonations, setUserDonations] = useState([]);
  const [statusChoosen, setStatusChoosen] = useState({ 
    id: 1, 
    label: 'Publicados', 
    translate: 'CREATED' 
  });
  const { history } = useHistory();
  const { token, userData } = useAuth();

  const status = [
    { id: 1, label: 'Publicados', translate: 'CREATED' },
    { id: 2, label: 'Doados', translate: 'DONATED' },
    { id: 3, label: 'Excluídos', translate: 'PAUSED'}
  ]

  useEffect(() => {
    const { id } = userData;
    DonationApi.listAllDonations(id, statusChoosen.translate)
    .then(response => {
      const { data } = response;
      setUserDonations(data);
    })
    .catch(error => {
      console.log(error.response.data);
    })
  }, [statusChoosen]);

  const deleteDonation = (id) => {
    DonationApi.deleteDonation(id)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error.response.data);
    })
  };

  const editDonation = (id) => {
    console.log('make edit');
  }

  const completedDonation = (id) => {
    const payload = {
      status: "DONATED"
    }
    DonationApi.updateDonation(id, payload)
    .then(response => {
      const { data } = response;
      console.log(data);
    })
    .catch(error => {
      console.log(error.response.data);
    });
  };

  return (
    <>
      <Helmet>
        <title>Minhas doações | Boação</title>
      </Helmet>
      <Header />
      <MyDonationsContainer>
        <Container>
          <TitlePage>Minhas doações</TitlePage>
        </Container>
        <StatusDonation>
          <Container>
            {status.map(item => {
              if(item.label === statusChoosen.label) {
                return (
                  <ActiveStatus 
                    onClick={() => {
                      setStatusChoosen(item);
                    }}
                    className="active" 
                    key={item.id}
                  >
                    {item.label}
                  </ActiveStatus>
                );
              }
              return (
                <Status 
                  onClick={() => {
                    setStatusChoosen(item);
                  }}
                  key={item.id}
                >
                  {item.label}
                </Status>
              )
            })}
          </Container>
        </StatusDonation>
        <Donations>
          <Container>

            {size(userDonations) === 0 && (
              <>
                <EmptyState>
                  <figure>
                    <img width="100px" src={EmptyStateIcon} alt={"Sem dados"} />
                  </figure>
                  <h1>
                    Você não possui doações cadastradas com esse status
                  </h1>
                </EmptyState>
              </>
            )}
            {userDonations.map(donation => {
              const path = `/donation/${donation.id}`;
                return (
                  <>
                    <CardDonation key={donation.id}>
                      <figure>
                        {donation?.files[0]?.url ? (
                          <img src={donation?.files[0]?.url} alt="Imagem da doação" />
                        ) : (
                          <img src={NotAvailable} alt="Sem imagem" />
                        )}
                      </figure>
                      <InfoCard>
                        <h1>
                          {donation.title}
                        </h1>
                        <span>
                          {donation.description}
                        </span>
                      </InfoCard>

                      <DonationOptions>
                        <Link to={path} title="Visualizar doação">
                          <img src={VisibilityIcon} alt="Ícone para visualizar" />
                        </Link>
                        
                        {donation.status === 'CREATED' && (
                          <>
                            <button 
                              onClick={editDonation}
                              title="Editar doação"
                            >
                              <img src={EditIcon} alt="Ícone para deletar" />
                            </button>

                            <button 
                              onClick={() => deleteDonation(donation.id)}
                              title="Deletar doação"
                            >
                              <img src={DeleteIcon} alt="Ícone para deletar" />
                            </button>

                            <button 
                              onClick={() => completedDonation(donation.id)}
                              title="Finalizar doação"
                            >
                              <img src={CheckIcon} alt="Confirmar doação" />
                            </button>
                          </>
                        )}
                      </DonationOptions>
                    </CardDonation>
                    <Separator />
                  </>
                )
              })}
          </Container>
        </Donations>
      </MyDonationsContainer>
    </>
  );
}

export default MyDonations;