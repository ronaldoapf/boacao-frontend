import styled from 'styled-components';

const MyDonationsContainer = styled.section`
  height: 100vh;
  padding-top: 40px;
  background: #f9f9f9;

  > div {
    height: initial;
  }
`;

const StatusDonation = styled.ul`
  width: 100%;
  list-style: none;
  margin-bottom: 40px;
  border-top: 1px #eaeaea solid;
  border-bottom: 1px #eaeaea solid;
  > div {
    display: flex;
  }
`;

const Status = styled.li`
  cursor: pointer;
  padding-top: 15px;
  margin-right: 40px;
  padding-bottom: 10px;
`;

const ActiveStatus = styled.li`
  cursor: pointer;
  margin-right: 40px;
  padding: 15px 20px 10px 20px;
  border-bottom: 3px #FEBD59 solid;
`;

const TitlePage = styled.h1`
  margin-bottom: 40px;
`;

const Donations = styled.section`
  width: 100%;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const CardDonation = styled.div`
  display: flex;
  figure {
    img {
      width: 160px;
      object-fit: cover;
    }
  }
`;

const Separator = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 32px;
  align-items: center;
  padding: 0px 0px 32px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(222, 222, 222);
`;

const InfoCard = styled.div`
  width: 50%;
  display: flex;
  margin-left: 32px;
  flex-direction: column;
  justify-content: center;
`;

const DonationOptions = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    margin-right: 13px;
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
  }
`;

const EmptyState = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  figure {
    margin-bottom: 20px;
  }

  h1{
    font-size: 30px;
    text-align: center;
    width: 400px;
  }
`;

export { 
  Status,
  InfoCard,
  Separator,
  Donations,
  TitlePage,
  EmptyState,
  CardDonation,
  ActiveStatus,
  StatusDonation,
  DonationOptions,
  MyDonationsContainer,
};