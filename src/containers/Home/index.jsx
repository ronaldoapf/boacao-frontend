import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';

import Header from '../../components/Header';
import Slider from '../../components/Slider';
import Container from '../../components/Container';
import SearchAndCategories from '../../components/SearchAndCategories';
import CardDonation from '../../components/CardDonation';
import { getCategories } from '../../services/category';

const Home = () => {

  const [categories, setCategories] = useState(null);
  
  useEffect(() => {

    getCategories().then(response => {
      setCategories(response.data);
    }).catch(err => console.log(err));

  }, []);
  
  return (
    <>
      <Helmet>
        <title>Home | Boação</title>
      </Helmet>
      <Header />
      <Container>
      <SearchAndCategories options={categories}/>
        <h4 style={{ marginTop: "32px"}}>Últimas doações</h4>
        <Slider height="450px">
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