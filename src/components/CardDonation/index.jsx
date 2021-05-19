import React from 'react';
import { Link } from 'react-router-dom';

import { Card, FooterCard, Info } from './style';
import GuardaRoupa from 'assets/guardaRoupa.jpg';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

const CardDonation = () => {
  return (
      <Card>
        <Link to="/donation/1">
          <figure>
            <img src={GuardaRoupa} alt="Imagem da doação"/>
          </figure>
        </Link>
        <Link to="/donation/1">
        <FooterCard>
          <h1>Guarda-roupa</h1>
          <Info>
            <LocalShippingOutlinedIcon />
            <span>
              Entrega
            </span>
          </Info>
          <Info>
            <RoomOutlinedIcon />
            <span>
              Uberlândia - MG
            </span>
          </Info>
        </FooterCard>
        </Link>

      </Card>
  );
}

export default CardDonation;