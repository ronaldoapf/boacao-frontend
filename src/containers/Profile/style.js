import styled from 'styled-components';

const ContainerProfile = styled.div`
  display: flex;
`;

const UserInformation = styled.section`
  width: 30%;
  margin-top: 32px;
  h1 { margin-bottom: 32px; }
  form { 
    width: 320px; 
    
    button {
      float: right;
      width: 50%;
    }
  }
`;

const UserDonation = styled.section`
  width: 70%;
  header { 
    width: 100%;
    display: flex;
    margin-top: 32px;
    align-items: center;
    margin-bottom: 32px;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      button:nth-child(1) {
        width: 40px;
        height: 40px;
        border: none;
        display: flex;
        align-items: center;
        border-radius: 20px;
        justify-content: center;
        background-color: #C4C4C4;
      }

      button:nth-child(2) {
        width: 160px;
        margin-left: 32px;
      }
    }
  }

`
const CardDonation = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;

  figure {
    width: 100px;
    img { 
      width: 100px;
      height: 100px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;

    }
  }
`;

const InfoDonation = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 32px;

  div {
    display: flex;
    align-items: center;
  }

  figure {
    width: 24px;
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const OptionsDonation = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderDonation = styled.div`
  
`;

export {
  ContainerProfile,
  UserInformation,
  UserDonation,
  CardDonation,
  InfoDonation,
  OptionsDonation,
  HeaderDonation
};
