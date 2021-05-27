import { useState, useEffect } from 'react';

import get from 'lodash.get';
import Helmet from 'react-helmet';

import Header from 'components/Header';
import Container from 'components/Container';
import NavigationStatus from 'components/NavigationStatus';

import EditIcon from "assets/edit.svg";
import DeleteIcon from "assets/delete.svg";
import Assignment from "assets/assignment.png";

import useAuth from 'contexts/AuthContext/useAuth';
import DonationApi from 'commons/resources/api/donation';

import { 
  CardDonation,
  InfoDonation,
  DonationsList, 
  HeaderDonation,
  OptionsDonation,
  MyDonationsTitle,
  MyDonationsContainer 
} from './style';


const MyDonations = () => {
  
  const [editDonation, setEditDonation] = useState([]);
  const [userDonations, setUserDonations] = useState([]);

  const { token, userData } = useAuth();

  useEffect(() => {
    const { id } = userData;
    DonationApi.listDonations(id).then(response => {
      const { data } = response;
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

      <Container>
        <MyDonationsContainer>
          <MyDonationsTitle>
            Minhas doações
          </MyDonationsTitle>

          <NavigationStatus donation={userDonations}/>
        </MyDonationsContainer>

      </Container>
    </>
  );
}

export default MyDonations;