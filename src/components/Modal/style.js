import styled from 'styled-components';


const Backdrop = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  z-index: 99999;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const CustomModal = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px 0 60px 24px;

  width: 768px;
`;

const HeaderModal = styled.header`
  display: flex;
  margin-right: 25px;
  justify-content: flex-end;

  svg {
    cursor: pointer;
  }
`

export { Backdrop, CustomModal, HeaderModal }