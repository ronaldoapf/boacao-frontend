import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import { 
  IconAndText,
  InfoDonation, 
  HeaderDonation, 
  PersonalProfile, 
  RelatedDonations,
  DonationContainer, 
  DescriptionDonation,
} from './style';

import DonationApi from 'commons/resources/api/donation';

import Slider from 'components/Slider';
import Button from 'components/Button';
import Container from 'components/Container';
import Assignment from 'assets/assignment.png';
import GuardaRoupa from 'assets/guardaRoupa.jpg';
import CardDonation from 'components/CardDonation';

import Ronaldo from 'assets/ronaldo.jpeg';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import PlaceIcon from '@material-ui/icons/Place';
import EventIcon from '@material-ui/icons/Event';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const Donation = () => {
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    const pathname = window.location.pathname;
    const splittedPathname = pathname.split("/");
    const id = splittedPathname.pop();

    DonationApi.showSpecificDonation(id)
    .then(response => {
      const { data } = response;
      if(data) setDonation(data);
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return (
    <>
      <Header />
      <Container>
        <DonationContainer>
          <figure>
            <img src={GuardaRoupa} alt="Imagem da doação"/>
          </figure>
          <InfoDonation>
            <HeaderDonation>
              <div>
                <img src={Assignment} alt="Ícone da categoria" />
                <label>
                  {donation?.category?.title}
                </label>
              </div>
              <h1>
                {donation?.title}
              </h1>
            </HeaderDonation>
            
            <DescriptionDonation>
              {donation?.description}
            </DescriptionDonation>

            <PersonalProfile>
              <span>
                Publicado por:
              </span>

              <div>
                <figure>
                  <img src={Ronaldo} alt="User Photo" />
                </figure>

                <div>
                  <label>
                    {donation?.user?.name}
                  </label>
                  <Link to="">
                    Ver perfil
                  </Link>
                </div>
              </div>
            </PersonalProfile>
            <IconAndText>
              <PlaceIcon />
              <span>
                Texto
              </span>
            </IconAndText>
            <IconAndText>
              <EventIcon />
              <span>
                Texto
              </span>
            </IconAndText>
            <IconAndText>
              <AirportShuttleIcon />
              <span>
                Texto
              </span>
            </IconAndText>

            <Button variant="filled">
              Entrar em contato 
              <WhatsAppIcon />
            </Button>
          </InfoDonation>
        </DonationContainer>

        <RelatedDonations>
          <header>
            <h1>
              Doações relacionadas
            </h1>
          </header>

          <Slider>
            <CardDonation />
          </Slider>
        </RelatedDonations>
      </Container>
    </>
  );
};

export default Donation;