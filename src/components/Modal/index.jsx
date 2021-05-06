import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Backdrop, CustomModal, HeaderModal } from './style';
import CloseIcon from '@material-ui/icons/Close';

const portal = document.getElementById('portal');


const Modal = ({ isOpen, onClose, children }) => {
  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <Backdrop> 
      <CustomModal>
        <HeaderModal onClick={onClose}>
          <CloseIcon />
        </HeaderModal>
        {children}
      </CustomModal>  
    </Backdrop>,
    portal,
  );
}

Modal.propTypes = {
  setOpen: PropTypes.func,
  children: PropTypes.any
}
export default Modal;