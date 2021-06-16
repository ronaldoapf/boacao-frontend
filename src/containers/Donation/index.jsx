import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import Header from 'components/Header';
import moment from 'moment';
import { 
  IconAndText,
  InfoDonation, 
  HeaderDonation, 
  PersonalProfile, 
  RelatedDonations,
  DonationContainer, 
  DescriptionDonation,
} from './style';

import get from 'lodash.get';
import size from 'lodash.size';

import DonationApi from 'commons/resources/api/donation';

import User from 'assets/user.png';
import Slider from 'components/Slider';
import Button from 'components/Button';
import Container from 'components/Container';
import Assignment from 'assets/assignment.png';
import CardDonation from 'components/CardDonation';
import NotAvailable from 'assets/not-available.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import PlaceIcon from '@material-ui/icons/Place';
import EventIcon from '@material-ui/icons/Event';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const Donation = ({ match }) => {
  const [donation, setDonation] = useState([]);
  const [imageDonation, setImageDonation] = useState();
  
  useEffect(() => {
    DonationApi.showSpecificDonation(match.params.id)
    .then(response => {
      const { data } = response;
      if(data) setDonation(data);
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  console.log(donation);
  const whatsAppLink = `
    https://api.whatsapp.com/send?phone=55${get(donation, ['user', 'phone'], '')}&text=Ol%C3%A1%20${get(donation, ['user', 'name'], '')}.%20O%20item%20anunciado%20para%20doa%C3%A7%C3%A3o%20${get(donation, ['title'], '')}%20ainda%20est%C3%A1%20dispon%C3%ADvel%3F
  `

  const profileLink = `/user/${donation?.user?.id}`
  const date = donation?.createdAt;
  return (
    <>
      <Header />
      <Container>
        <DonationContainer>
          <figure>
              {size(donation.files) !== 0 ? (
                <img src={get(donation, ['files', '0', 'url'], '')} alt="Imagem da doação" />
              ) : (
                <img src={NotAvailable} alt="Sem imagem" />
              )}
          </figure>
          <InfoDonation>
            <HeaderDonation>
              <div>
                <img src={Assignment} alt="Ícone da categoria" />
                <label>
                  {get(donation, ['category', 'title'], '')}
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
                  {donation?.user?.avatar ? (
                    <img src={donation?.user?.avatar?.url} alt="Avatar" />
                  ) : (
                    <img src={User} alt="Avatar sem imagem" />
                  )}
                </figure>

                <div>
                  <label>
                    {donation?.user?.name}
                  </label>
                  <Link to={profileLink}>
                    Ver perfil
                  </Link>
                </div>
              </div>
            </PersonalProfile>
            <IconAndText>
              <PlaceIcon />
              {donation?.address ? (
                <span>
                  {donation?.address?.city} - {donation?.address?.uf}
                </span>
              ) : (
                <span>
                  Localização não informada
                </span>
              )}
             
            </IconAndText>
            <IconAndText>
              <EventIcon />
              <span>
                Publicado em {moment(date).utc().format('DD/MM/YYYY')}
              </span>
            </IconAndText>
            <IconAndText>
              <AirportShuttleIcon />
              {donation?.deliveryAvailability ? (
                <span>
                  Disponibilidade para entrega
                </span>
              ) : (
                <span>
                  Não tem disponibilidade para entrega
                </span>
              )}
            </IconAndText>

            <a href={whatsAppLink} >
              <Button variant="filled">
                Entrar em contato 
                <WhatsAppIcon />
              </Button>
            </a>
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