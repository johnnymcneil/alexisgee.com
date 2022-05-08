import Image from 'next/image';

import styles from './imageWithModal.module.scss'

import { v4 as uuidv4 } from 'uuid'
import { ModalContext } from '../contexts/modalContext';

export default function ImageWithModal({ image }) {
  const KEY = new uuidv4()
  
  return (
    <ModalContext.Consumer>
    {({showModal}) => (
      <div
        key={ KEY }
        className={ styles['thumbnail-container'] }
        onClick={ () => showModal(image.title) }
      >
        <Image
          className={ styles['grid-img'] }
          src={ image.file }
          layout='fill'
          objectFit='cover'
          quality={100}/>
        <p className={ styles.title }>{ image.title }</p>
      </div>
    )}
    </ModalContext.Consumer>
  )
}