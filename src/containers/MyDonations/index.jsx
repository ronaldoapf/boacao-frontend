import { useState, useEffect } from 'react';
import get from 'lodash.get';
import Helmet from 'react-helmet';
import { useHistory, Link } from 'react-router-dom';

import Header from 'components/Header';
import Container from 'components/Container';

import EditIcon from "assets/edit.svg";
import DeleteIcon from "assets/delete.svg";
import Assignment from "assets/assignment.png";

import useAuth from 'contexts/AuthContext/useAuth';
import DonationApi from 'commons/resources/api/donation';

import { 
  Status,
  InfoCard,
  Separator,
  TitlePage,
  Donations,
  CardDonation,
  ActiveStatus,
  StatusDonation,
  MyDonationsContainer 
} from './style';


const MyDonations = () => {
  
  const [editDonation, setEditDonation] = useState([]);
  const [userDonations, setUserDonations] = useState([]);
  const [statusChoosen, setStatusChoosen] = useState('Publicados');
  const { history } = useHistory();
  const { token, userData } = useAuth();

  const status = [
    { id: 1, label: 'Publicados', },
    { id: 2, label: 'Doados' },
    { id: 3, label: 'Excluídos'}
  ]

  useEffect(() => {
    const { id } = userData;
    DonationApi.listDonations(id).then(response => {
      const { data } = response;
      console.log(data);
      setUserDonations(data);
    })
  }, []);


  const handleFilter = () => {
    console.log('filter');
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
              if(item.label === statusChoosen) {
                return (
                  <ActiveStatus 
                    onClick={() => setStatusChoosen(item.label)} 
                    className="active" 
                    key={item.id}
                  >
                    {item.label}
                  </ActiveStatus>
                );
              }
              return (
                <Status 
                  onClick={() => setStatusChoosen(item.label)} 
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
            {userDonations.map(donation => {
              console.log(donation.id)
              const path = `/donation/${donation.id}`;
              return (
                <>
                  <Link to={path}>
                    <CardDonation key={donation.id}>
                      <figure>
                        <img src={donation?.files[0].url} alt="Imagem da doação" />
                      </figure>
                      <InfoCard>
                        <h1>
                          {donation.title}
                        </h1>
                        <span>
                          {donation.description}
                        </span>
                      </InfoCard>
                    </CardDonation>
                  </Link>
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