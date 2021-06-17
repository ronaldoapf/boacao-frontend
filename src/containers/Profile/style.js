import styled from 'styled-components';

const Menu = styled.aside`
  width: 20%;
  height: 80px;
  display: flex;
  padding: 5px 0;
  position: sticky;
  border-radius: 8px;
  margin-right: 80px;
  background-color: white;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 8%) 0px 4px 16px 0px, rgb(0 0 0 / 6%) 0px 2px 4px 0px;

  ul {
    a {
      text-decoration: none;
      color: black;
    }
  }
`;

const MenuItem = styled.li`
  display: flex;
  padding: 5px 0;
  cursor: pointer;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const ProfileContainer = styled.section`
  > div {
    display: flex;
  }

  height: 100%;
  padding-top: 20px; 
  background-color: #f9f9f9;
`;

const UserInfo = styled.div`
  width: 80%;
`;

const HeaderInfo = styled.header`
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    margin: 0;
  }

  span {
    color: #999999;
    margin: 0;
    font-size: 12px;
  }
`;

const TitleBox = styled.h1`
  margin-bottom: 20px;
`;

export {
  Menu,
  MenuItem,
  UserInfo,
  TitleBox,
  HeaderInfo,
  ProfileContainer,
}