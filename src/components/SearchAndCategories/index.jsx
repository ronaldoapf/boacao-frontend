import React from 'react';
import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';
import { Link } from 'react-router-dom';

import { 
  Category, 
  CategoryText,
  CategoryList, 
  CategoryIcon, 
} from './style';

import Input from 'components/Input';
import TvIcon from '@material-ui/icons/Tv';
import DeckIcon from '@material-ui/icons/Deck';
import PetsIcon from '@material-ui/icons/Pets';
import RadioIcon from '@material-ui/icons/Radio';
import CreateIcon from '@material-ui/icons/Create';
import KitchenIcon from '@material-ui/icons/Kitchen';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import AccessibilityRoundedIcon from '@material-ui/icons/AccessibilityRounded';

const SearchAndCategories = ({options}) => {
  return (
    <>
      <div style={{ marginTop: "32px"}}>
        <Formik
          initialValues={{}}
          validationSchema={null}
          onSubmit={values => console.log(values)}
        >
          {({ values }) => (
            <Form>
              <Input 	
                name="search"
                label="Buscar"
                type="search"
                icon={SearchRoundedIcon} />
            </Form>
          )}
        </Formik>
        <CategoryList>
          {options?.map(item => {
            console.log(item.iconName)
            
            return (
              <Category key={item.id}>
                <Link to="">
                  <CategoryIcon>
                    {item.iconName}
                  </CategoryIcon>
                  <CategoryText>
                  {item.title}
                  </CategoryText>
                </Link>
              </Category>
            )
          })}
        </CategoryList>
      </div>

    </>
  );
};

SearchAndCategories.propTypes = {
  options: PropTypes.array,
}

export default SearchAndCategories;