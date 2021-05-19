import { Link } from 'react-router-dom';
import Header from 'components/Header';
import { 
  IconAndText,
  InfoDonation, 
  HeaderDonation, 
  PersonalProfile, 
  DonationContainer, 
  DescriptionDonation, 
} from './style';

import Button from 'components/Button';
import Container from 'components/Container';
import Assignment from 'assets/assignment.png';
import GuardaRoupa from 'assets/guardaRoupa.jpg';
import Ronaldo from 'assets/ronaldo.jpeg';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import PlaceIcon from '@material-ui/icons/Place';
import EventIcon from '@material-ui/icons/Event';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';

const Donation = () => {
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
                  Móveis
                </label>
              </div>
              <h1>
                Guarda-roupas
              </h1>
            </HeaderDonation>
            
            <DescriptionDonation>
              Guarda roupas com 4 Portas de Correr Kappesberg.
              Muito novo, com apenas 3 meses de uso
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
                    Ronaldo Alves Pereira Filho
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
      </Container>
    </>
  );
};

export default Donation;