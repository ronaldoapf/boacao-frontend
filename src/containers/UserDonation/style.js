import styled from 'styled-components';

const UserDonationContainer = styled.section`
  padding-top: 24px;
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const UserImage = styled.figure`
  width: 130px;
  height: 130px;
  margin-right: 32px;

  img {
    width: 130px;
  }
`;

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 14px;
  }

  > div {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 14px;
  }
`;


const HeaderUser = styled.header`
  width: 100%;
  display: flex; 
  padding-bottom: 24px;
  border-bottom: 1px #eaeaea solid;
`;

const DonationsList = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 30px 0;
  }
`;

export {
  UserImage,
  HeaderUser,
  DonationsList,
  UserInformation,
  UserDonationContainer
}