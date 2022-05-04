import { v4 as uuidv4 } from 'uuid'
import styles from './imageGrid.module.scss'

export default function ImageGrid({ imageSet }) {

  const path = require('path')
  
  return (
    <div className={styles['grid-container']}>
      {
        imageSet.map((image) => {
          const IMG_NAME = path.parse(image).name.split('__')[0].replaceAll('_', ' ')
          const KEY = new uuidv4();

          return (
            <div
              key={ KEY }
              className={styles['grid-item']}
              style={{ backgroundImage: 'url(' + image + ')' }}>
              <p className={styles.imgTitle}>{ IMG_NAME }</p>
            </div>
          )
        })
      }
    </div>
  )
}