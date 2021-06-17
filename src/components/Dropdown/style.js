import styled from 'styled-components';

const DropdownContainer = styled.nav`
  top: 65px;
  z-index: 1;
  width: 200px;
  height: auto;
  border-radius: 8px;
  position: absolute;
  background-color: white;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px, rgb(0 0 0 / 6%) 0px 2px 4px 0px;
`;

const Menu = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
  flex-direction: column;

`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  float: left;
  width: 100%;
  padding: 10px 0;

  figure {
    margin-left: 15px;
    margin-right: 20px;
  }

  &:hover {
    background-color: rgb(210, 210, 210);
    transition: .3s ease-in-out;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  overflow: hidden;
  border-top: 1px solid rgb(210, 210, 210);
`;

export {
  Menu, 
  MenuItem,
  Separator,
  DropdownContainer
};