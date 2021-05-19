import Helmet from 'react-helmet';

import Header from 'components/Header';
import Slider from 'components/Slider';
import Container from 'components/Container';
import SearchAndCategories from 'components/SearchAndCategories';
import CardDonation from 'components/CardDonation';
import Loader from 'components/Loader';
import { ToastContainer } from 'react-toastify';

const Home = () => {

  return (
    <>
      <Helmet>
        <title>Home | Boação</title>
      </Helmet>
      <Header />
      <Container>
			<ToastContainer />
      <SearchAndCategories options={[]}/>
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