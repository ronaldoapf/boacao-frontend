import { IndeterminateCheckBox } from '@material-ui/icons';
import get from 'lodash.get';

import {
  StatusMenu,
  StatusMenuItem,
  NavigationContainer,
} from './style';

const NavigationStatus = ({ donation }) => {
  // ['PUBLISHED', 'DONATED', 'ENDED']
  
  return (
    <NavigationContainer>
      <StatusMenu>
        <StatusMenuItem>
          Publicado
          </StatusMenuItem>
        <StatusMenuItem>
          Doado
        </StatusMenuItem>
        <StatusMenuItem>
          Finalizado
        </StatusMenuItem>
      </StatusMenu>
    </NavigationContainer>
  )
};

export default NavigationStatus;