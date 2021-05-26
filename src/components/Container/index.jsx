import PropTypes from 'prop-types';
import { Container as MainContainer } from './style';

const Container = ({ children }) => {
  return (
    <MainContainer>
    {children}
    </MainContainer>
  );
};

Container.propTypes = {
  children: PropTypes.any
}

export default Container;