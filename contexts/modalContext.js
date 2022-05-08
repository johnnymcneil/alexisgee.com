import React from 'react'

export const ModalContext = React.createContext({
  activeModal: null,
  showModal: () => {},
  closeModal: () => {}
})