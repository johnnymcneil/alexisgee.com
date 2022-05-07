<<<<<<< HEAD
=======
import Image from 'next/image';
>>>>>>> dev
import { v4 as uuidv4 } from 'uuid'
import styles from './imageGrid.module.scss'


<<<<<<< HEAD
export default function ImageGrid({ set, imageList }) {
  
  const path = require('path')

  return (
    <div className={styles['grid-container']}>
      {
        imageList.map((image) => {
          const KEY = new uuidv4();
=======
export default function ImageGrid({ context }) {
  const set = context['directory']
  return (
    <div className={styles['grid-container']}>
      {
        context.images.map((image) => {
          const KEY = new uuidv4();
<<<<<<< Updated upstream
>>>>>>> dev
          const IMG_BASENAME = path.parse(image).name.split('__')[0]
          const IMG_PATH = '/images/' + set + '/' + image
          const IMG_NAME = IMG_BASENAME.replace('_', ' ')

<<<<<<< HEAD
          console.log('image',image)
          console.log('IMG_NAME',IMG_NAME)
          console.log(IMG_PATH)
=======
          return (
            <div
              key={ KEY }
              className={ styles['grid-item'] }>

              <Image
                src={ image }
                className={ styles.gridImg } />

              <p className={ styles.imgTitle }>{ IMG_NAME }</p>

=======
          const IMG_PATH = '/public/images/' + set + '/' + image.file
>>>>>>> dev
          return (
            <div
              key={ KEY }
              className={ styles['grid-item'] }
<<<<<<< HEAD
              style={{ backgroundImage: 'url('+IMG_PATH+')' }}>
              <p className={ styles.imgTitle }>{ IMG_NAME }</p>
=======
              style={{ backgroundImage: 'url("'+IMG_PATH+'")' }}>
              <p className={ styles.imgTitle }>{ image.title }</p>
>>>>>>> Stashed changes
>>>>>>> dev
            </div>
          )
        })
      }
    </div>
  )
}