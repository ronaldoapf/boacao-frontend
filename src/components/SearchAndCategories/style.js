import styled from 'styled-components';

const CategoryList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Category = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a{
    text-decoration: none;
    color: #000;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const CategoryText = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #AAA;
`;

const CategoryIcon = styled.figure`
  width: 60px;
  height: 60px;
  display: flex;
  margin-bottom: 8px;
  align-items: center;
  border-radius: 100px;
  justify-content: center;
  border: 1px #eaeaea solid;
`;


export { 
  Category, 
  CategoryList, 
  CategoryIcon, 
  CategoryText 
};