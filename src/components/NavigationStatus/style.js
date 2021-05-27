import styled from 'styled-components';

const NavigationContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px #eaeaea solid;
`;

const StatusMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const StatusMenuItem = styled.li`
  color: #666;
  font-size: 16px;
  font-weight: 400;
  margin-right: 40px;
`;

export { 
  StatusMenu,
  StatusMenuItem,
  NavigationContainer 
}; 