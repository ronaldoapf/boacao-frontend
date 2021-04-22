import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Backdrop, CustomModal, HeaderModal } from './style';
import CloseIcon from '@material-ui/icons/Close';

const Modal = ({ setOpen, children }) => {
  return (
    <Backdrop> 
      <CustomModal>
        <HeaderModal onClick={() => setOpen(false)}>
          <CloseIcon />
        </HeaderModal>
        {children}
      </CustomModal>  
    </Backdrop> 
  );
}

Modal.propTypes = {
  setOpen: PropTypes.func,
  children: PropTypes.any
}
export default Modal;