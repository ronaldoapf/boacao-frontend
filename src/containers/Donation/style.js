import styled from 'styled-components';

const DonationContainer = styled.section`
  display: flex;
  padding-top: 34px;

  figure {
    margin: 0;

    img {
      width: 576px;
      height: 600px;
      object-fit: cover;
    }
  }
`;


const InfoDonation = styled.section`
  margin-left: 24px;

  button {
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      margin-left: 8px;
    }
  }
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
  margin-bottom: 22px;
  margin-top: 18px;

  span {
    color: #666666;
    font-size: 14px;
  }

  > div {
    display: flex;
    figure {
      margin-top: 4px;
      svg {
        color: #666666;
        width: 48px;
        height: 48px;
        object-fit: cover;
        border-radius: 24px;
      }
    }

    div {
      margin-left: 8px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      
      label {
        font-size: 18px;
        font-weight: bold;
        color: #000000;
      }

      a {
        font-size: 12px;
        text-decoration: none;
        color: #000000;
      }
    }
  }
`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #666666;
  } 

  span {
    margin-left: 12px;
    color: #000000;
    font-size: 16px;
  }
  
  &:not(:last-child){
    margin-bottom: 12px;
  }

  &:last-child{
    margin-bottom: 28px;
  }
`;

const RelatedDonations = styled.section`
  header {
    h1 {
      color: #333333;
      font-size: 24px;
      margin-top: 32px;
      margin-bottom: 32px;
    }
  }
`;

export {
  IconAndText,
  InfoDonation,
  HeaderDonation,
  PersonalProfile,
  RelatedDonations,
  DonationContainer,
  DescriptionDonation,
}