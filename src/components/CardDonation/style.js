import styled from 'styled-components';

const Card = styled.div`
  width: 288px;
  height: 400px;  
  cursor: pointer;
  margin-bottom: 20px;

  figure {
    height: 300px;
  }

  img {
    width: 288px;
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  a{
    text-decoration: none;
  }
`;

const Info = styled.div`
  color: #888;
  display: flex;
  align-items: center;

  svg {
    font-size: 22px;
    margin-right: 6px;
  } 

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const FooterCard = styled.footer`
  display: flex;
  padding: 13px 16px;
  background-color: #fff;
  flex-direction: column;
  border: 1px #eaeaea solid;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  
  h1 {
    color: #333;
    font-size: 18px;
    margin-bottom: 13px;
  }

  span {
    color: #888;
    font-size: 12px;
  }
`;


export { Card, FooterCard, Info }