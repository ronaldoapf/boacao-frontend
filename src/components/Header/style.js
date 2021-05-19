import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px #FEBD59 solid;

  ul {
    display: flex;
    list-style: none;

    li:not(:last-child){
      margin-right: 27px;
    }

    a{
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  }

  img {
    width: 100px;
  }
`;

const ExitButton = styled.button`
  border: none;
  outline: none;
  font-size: 16px;
  background: transparent;
`;

export { Header, ExitButton }