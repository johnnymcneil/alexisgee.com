import styles from './grid.module.scss'
import ImageWithModal from './imageWithModal';


export default function Grid({ context }) {
  var gridItems = []

  // Create an Image Modal for each Image
  context.images.forEach(
    (image) => {
      gridItems.push(<div className={ styles['grid-item'] }><ImageWithModal image={image} /></div>)
    }
  )

  return (
    <>
      <div className={styles['grid-container']}>
        { gridItems }
      </div>
    </>
  )
}