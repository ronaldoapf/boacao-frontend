import styled, { css } from 'styled-components';

const HeaderContainer = styled.header`
  border-bottom: 1px #eaeaea solid;
`;

const HeaderChild = styled.div`
  height: 80px;
  display: flex;
  margin: 0 auto;
  max-width: 1272px;
  align-items: center;
  justify-content: space-between;

  figure {
    img {
      width: 120px;
    }
  }
`;

const OptionsHeader = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const Options = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;

  span {
    margin: 0 10px;
  }

  button {
    width: 100px;
    height: 35px;
  }

  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export { 
  Options,
  HeaderChild, 
  OptionsHeader, 
  HeaderContainer, 
};