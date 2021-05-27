import Helmet from 'react-helmet';

import UserApi from 'commons/resources/api/user';
import DonationApi from 'commons/resources/api/donation';

const UserDonations = ({ match }) => {
  const nickname = match.params.nickname;
  console.log(match)
  return (
    <Helmet>
      <title>
        {nickname} | Boação
      </title>
    </Helmet>
   
  )
};

export default UserDonations;