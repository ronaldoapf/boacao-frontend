import styled from 'styled-components';

const DonationContainer = styled.section`
  display: flex;
  padding-top: 34px;
`;


const InfoDonation = styled.section`

`;

const HeaderDonation = styled.header`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    
    figure{
      img {
        width: 24px;
        height: 24px;
      }
    }
    label {
      color: #666;
      font-size: 16px;
      margin-top: 3px;
      margin-left: 6px;
    }
  }

  h1{
    margin: 0;
    color: #333;
    font-size: 32px;
  }
`;

const DescriptionDonation = styled.p`
  width: 70%;
  color: #666;
  font-size: 18px;
  font-weight: 300;
`;

const PersonalProfile = styled.div`
  
`;

export {
  InfoDonation,
  HeaderDonation,
  PersonalProfile,
  DonationContainer,
  DescriptionDonation,
}