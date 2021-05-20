import { Link } from 'react-router-dom';

import { Card, FooterCard, Info } from './style';
import get from 'lodash.get';
import GuardaRoupa from 'assets/guardaRoupa.jpg';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

const CardDonation = ({ data }) => {
  console.log(data);
  const link = `/donation/${data?.id}`

  return (
      <Card>
        <Link to={link}>
          <figure>
            <img src={get(data, ['files', '0', 'url'], '')} alt="Imagem da doação"/>
          </figure>
        </Link>
        <Link to="/donation/1">
        <FooterCard>
          <h1>{data?.title}</h1>
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