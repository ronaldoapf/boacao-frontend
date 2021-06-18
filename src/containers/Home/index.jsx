import { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import Header from 'components/Header';
import BoxShadow from 'components/BoxShadow';
import Slider from 'components/Slider';
import Container from 'components/Container';
import SearchAndCategories from 'components/SearchAndCategories';
import CardDonation from 'components/CardDonation';
import Loader from 'components/Loader';
import { ToastContainer } from 'react-toastify';

import DonationApi from 'commons/resources/api/donation';

const Home = () => {
  const [lastDonations, setLastDonations] = useState([]);

  useEffect(() => {
    DonationApi.listAllDonations(null, 'CREATED')
    .then(response => {
      const { data } = response;
      if(data) setLastDonations(data); 
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])
  
  return (
    <>
      <Helmet>
        <title>Home | Boação</title>
      </Helmet>
      <Header />
      <Container>
        <ToastContainer />
        <h4 style={{ marginTop: "32px"}}>Últimas doações</h4>
        <Slider height="450px">
          {lastDonations?.map(donation => {
            return <CardDonation key={donation} data={donation}/>
          })}
        </Slider>
      </Container>
    </>
  );
}

export default Home;