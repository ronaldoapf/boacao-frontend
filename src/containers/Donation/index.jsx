import React from 'react';

import Header from 'components/Header';
import { 
  InfoDonation, 
  HeaderDonation, 
  PersonalProfile, 
  DonationContainer, 
  DescriptionDonation, 
} from './style';
import Container from 'components/Container';
import Assignment from 'assets/assignment.png';
import GuardaRoupa from 'assets/guardaRoupa.jpg';

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

              <figure>
                <img src="" alt="" />
              </figure>
            </PersonalProfile>
          </InfoDonation>
        </DonationContainer>
      </Container>
    </>
  );
};

export default Donation;