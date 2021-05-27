import styled from 'styled-components';

const MyDonationsContainer = styled.section`
  padding-top: 40px;
`;

const MyDonationsTitle = styled.h1`
  margin-bottom: 40px;
`;

const DonationsList = styled.section`
  width: 100%;
  max-height: 1000px;
  overflow-y: auto;
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

`;

const CardDonation = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  background-color: #C4C4C4;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  figure {
    width: 100px;
    height: 100px;
    img { 
      width: 100px;
      height: 100px;
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const InfoDonation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-left: 32px;
  flex-direction: column;
  justify-content: center;

  div {
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const OptionsDonation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {

    border: none;
    outline: none;
    display: flex;
    background: transparent;

    &:nth-child(2) {
      margin: 0 24px;
    }

    figure {
      width: 24px;
      display: flex;
      align-items: center;
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const HeaderDonation = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    
    label {
      margin-top: 4px;
      margin-left: 6px;
    }
  }
`;

export { 
  DonationsList,
  CardDonation,
  InfoDonation,
  HeaderDonation,
  OptionsDonation,
  MyDonationsTitle,
  MyDonationsContainer,
};