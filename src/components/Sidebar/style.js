import styled from 'styled-components';

const ContainerSidebar = styled.aside`
  right: 0;
  top: 0;
  width: 320px;
  height: 100vh;
  position: absolute;
  background-color: red;
  padding: 16px 16px;
`

const HeaderSidebar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    background: transparent;
    justify-content: space-between;
  }
`

export { 
  ContainerSidebar,
  HeaderSidebar
 };