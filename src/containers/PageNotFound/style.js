import styled from 'styled-components';

const NotFoundContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a{
    text-decoration: none;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 70px;
  }
`;

export { NotFoundContent }