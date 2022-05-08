import '../styles/global.scss'
import 'bootstrap-icons/font/bootstrap-icons.scss'

import { useState } from 'react'
import { ModalContext } from '../contexts/modalContext'

function App({ Component, pageProps }) {
  
  const [activeModal, setActiveModal] = useState(null)

  
  const showModal = (modal_id) => {
    setActiveModal(null)
    setActiveModal(modal_id)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const modalContext = {
    activeModal: activeModal,
    showModal: showModal,
    closeModal: closeModal
  }
  
  return  (
    <ModalContext.Provider value={ modalContext }>
      <Component {...pageProps} />
    </ModalContext.Provider>
  )
}

export default App