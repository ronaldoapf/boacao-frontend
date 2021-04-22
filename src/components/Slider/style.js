import styled from 'styled-components';

const Slider = styled.div`
  width: 100%;
  display: flex;
  height: 450px;
  overflow-x: auto;
  align-items: center;

  div {
    margin-right: 32px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: #F4F4F4;
  }

  &::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }

  &::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

export { Slider };