import { v4 as uuidv4 } from 'uuid'
import styles from './imageGrid.module.scss'


export default function ImageGrid({ set, imageList }) {
  
  const path = require('path')

  return (
    <div className={styles['grid-container']}>
      {
        imageList.map((image) => {
          const KEY = new uuidv4();
          const IMG_BASENAME = path.parse(image).name.split('__')[0]
          const IMG_PATH = '/images/' + set + '/' + image
          const IMG_NAME = IMG_BASENAME.replace('_', ' ')

          console.log('image',image)
          console.log('IMG_NAME',IMG_NAME)
          console.log(IMG_PATH)
          return (
            <div
              key={ KEY }
              className={ styles['grid-item'] }
              style={{ backgroundImage: 'url('+IMG_PATH+')' }}>
              <p className={ styles.imgTitle }>{ IMG_NAME }</p>
            </div>
          )
        })
      }
    </div>
  )
}