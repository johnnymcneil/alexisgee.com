import Image from 'next/image'
import { useContext } from 'react'
import { ModalContext } from '../contexts/modalContext'

import styles from './modal.module.scss'

export default function Modal({ image }) {
  const modalContext = useContext(ModalContext)
  const isActive = modalContext.activeModal == image.title
  const activeClass = isActive ? styles.active : null
  
  return (
    <ModalContext.Consumer>
    {({ closeModal }) => (
      <div
        id={ image.title }
        className={ `${styles.modal} ${activeClass}` }
        onClick={ () => closeModal() }
      >
        <div className={ styles['modal-container'] }>

          <div
            className={ styles['close-btn'] }
            onClick={ () => closeModal() }
            title='Close Image'
          >
            <i className="bi bi-x-circle-fill"></i>
          </div>

          <div className={ styles['content'] }>
          
            <Image
              className={ styles['modal-image'] }
              src={ image.file }
              layout='raw'
              quality={ 100 }
            />

            <div className={ styles['modal-title'] }>
              <p>
                { image.title }
              </p>
            </div>

          </div>

        </div>
      </div>
    )}
    </ModalContext.Consumer>
  )

}