import { Link } from 'react-router-dom';

import get from 'lodash.get';
import size from 'lodash.size';

import { Card, FooterCard, Info } from './style';
import NotAvailable from 'assets/not-available.png';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';

const CardDonation = ({ data }) => {
  const link = `/donation/${data?.id}`

  return (
      <Card>
        <Link to={link}>
          <figure>
            {size(data?.files) !== 0 ? (
              <img src={get(data, ['files', '0', 'url'], '')} alt="Imagem da doação"/>
            ) : (
              <img src={NotAvailable} alt="Sem imagem" />
            )}
          </figure>
        </Link>
        <Link to="/donation/1">
        <FooterCard>
          <h1>{data?.title}</h1>
          <Info>
            <LocalShippingOutlinedIcon />
            {data?.deliveryAvailability ? (
              <span>
                Entrega
              </span>
            ) : (
              <span>
                Não oferece serviço de entrega
              </span>
            )}
          </Info>
          <Info>
            <RoomOutlinedIcon />
              {data?.address && (
                <span>
                  {data?.address?.city} - {data?.address?.uf}
                </span>
              )}
          </Info>
        </FooterCard>
        </Link>

      </Card>
  );
}

export default CardDonation;