import styled from 'styled-components';

const ContainerLoader = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export { ContainerLoader };