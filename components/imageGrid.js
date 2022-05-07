import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid'
import styles from './imageGrid.module.scss'



export default function ImageGrid({ context }) {
  const set = context.directory
  var gridItems = []
  context.images.forEach(
    (image) => {
      const KEY = new uuidv4()
      const IMG_PATH = '/images/' + set + '/' + image.file
      gridItems.push(
        <div key={ KEY } className={ styles['grid-item'] }>
          <Image
            className={ styles['grid-img'] }
            src={IMG_PATH}
            layout='fill'
            objectFit='cover'
            quality={100} />
          <p className={ styles.imgTitle }>{ image.title }</p>
        </div>
      )
    }
  )

  return (
    <div className={styles['grid-container']}>
      { gridItems }
    </div>
  )
}