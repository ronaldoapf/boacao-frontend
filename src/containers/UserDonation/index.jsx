import { useEffect, useState } from 'react';

import Header from 'components/Header';
import Slider from 'components/Slider';
import Container from 'components/Container';
import UserApi from 'commons/resources/api/user';
import CardDonation from 'components/CardDonation';
import DonationApi from 'commons/resources/api/donation';

import User from 'assets/user.png';
import RoomIcon from '@material-ui/icons/Room';


import {
  UserImage,
  HeaderUser,
  DonationsList,
  UserInformation,
  UserDonationContainer
} from './style';

const UserDonation = ({ match }) => {
  
  const [userInfo, setUserInfo] = useState({});
  const [userDonations, setUserDonations] = useState([]);

  useEffect(() => {
    UserApi.listUser(match.params.id)
    .then(response => {
      const { data } = response;
      if(data) setUserInfo(data);
      console.log(response.data);
    })
    .catch(error => {
      console.log(error.response.data)
    })

    DonationApi.listDonations(match.params.id)
    .then(response => {
      const { data } = response;
      if(data) setUserDonations(data);
      console.log(response.data)
    })
    .catch(error => {
      console.log(error.response.data);
    })
  }, []);

  return (
    <>
      <Header />
      <UserDonationContainer>
        <Container>
          <HeaderUser>
            {userInfo?.avatar ? (
              <UserImage>
                <img src={userInfo?.avatar?.url} alt="Imagem do usuário" />
              </UserImage>
            ) : (
              <UserImage>
                <img src={User} alt="Usuário sem imagem" />
              </UserImage>
            )}

            <UserInformation>
              <h1>{userInfo?.name}</h1>
              <div>
                <RoomIcon />
                <span>
                  {userInfo?.address?.city} - {userInfo?.address?.uf}
                </span>
              </div>
            </UserInformation>
          </HeaderUser>

          <DonationsList>
            <h1>Doações em aberto</h1>
            <Slider height="450px">
              {userDonations.map(donation => {
                return <CardDonation key={donation.id} data={donation} />
              })}
            </Slider>
          </DonationsList>
         
        </Container>
      </UserDonationContainer>
    </>
  ); 
}

export default UserDonation;