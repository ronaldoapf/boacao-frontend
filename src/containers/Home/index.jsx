import React from 'react';
import Helmet from 'react-helmet';

import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Container from '../../components/Container';
import CardDonation from '../../components/CardDonation';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Boação</title>
      </Helmet>
      <Header />
      <Container>
        <h4 style={{ marginTop: "32px"}}>Últimas doações</h4>
        <Slider>
          <CardDonation />
          <CardDonation />
          <CardDonation />
          <CardDonation />
          <CardDonation />
        </Slider>
      </Container>
    </>
  );
}

export default Home;