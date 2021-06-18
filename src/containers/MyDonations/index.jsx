import { useState, useEffect } from 'react';
import get from 'lodash.get';
import size from 'lodash.size';
import Helmet from 'react-helmet';
import { useHistory, Link } from 'react-router-dom';

import Header from 'components/Header';
import Loader from 'components/Loader';
import Container from 'components/Container';
import { toast, ToastContainer } from 'react-toastify';

import EditIcon from 'assets/svg/edit.svg';
import CheckIcon from 'assets/svg/check.svg';
import Assignment from 'assets/assignment.png';
import DeleteIcon from 'assets/svg/delete.svg';
import EmptyStateIcon from 'assets/svg/empty.svg';
import NotAvailable from 'assets/not-available.png'
import VisibilityIcon from 'assets/svg/visibility.svg';

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
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    DonationApi.deleteDonation(id)
    .then(response => {
      toast.success("Doação deletada com sucesso");
      setIsLoading(false);
    })
    .catch(error => {
      setIsLoading(false);
      toast.error("Não foi possível deletar a doação")
    })
  };

  const editDonation = (id) => {
    toast.error('Não foi possível realizar a edição');
  }

  const completedDonation = (id) => {
    setIsLoading(true);
    const payload = {
      status: "DONATED"
    }
    DonationApi.updateDonation(id, payload)
    .then(response => {
      const { data } = response;
      toast.success('Item doado com sucesso');
      setIsLoading(false);
    })
    .catch(error => {
      setIsLoading(false);
      toast.error('Não foi possível finalizar a doação');
    });
  };

  return (
    <>
      <Helmet>
        <title>Minhas doações | Boação</title>
      </Helmet>
      <Header />
      <Loader isLoading={isLoading}/>
      <ToastContainer />
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