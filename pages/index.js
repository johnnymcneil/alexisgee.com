import Head from 'next/head'
import ImageGrid from '../components/imageGrid'
import Layout from '../components/layout'
<<<<<<< HEAD
import styles from '../styles/Assembly.module.scss'

=======
<<<<<<< Updated upstream
import styles from '../styles/Home.module.scss'
>>>>>>> dev

export default function Home() {
  const TITLE = 'Patterns in Nature'
  const NATURE_IMAGES = [
<<<<<<< HEAD
    'La_Flama.jpg',
    'Moss_on_Bark.jpg',
    'Red_Flowers.jpg',
    'Succulent.jpg'
  ]

=======
    'Brooch.jpg',
    'Carciofi.jpg',
    'Cheezepuf.jpg',
    'Chewy.jpg',
    'Ecotone.jpg',
    'Estrella.jpg',
    'Fillagree.jpg',
    'flamafall.jpg',
    'Lichen It.jpg',
    'Malachite.jpg',
    'Mortal Coil.jpg',
    'Palm Beach.jpg',
    'Ripple.jpg',
    'Sequence.jpg',
    'Tangled.jpg',
    'Velour.jpg',
  ]

=======
import styles from '../styles/Assembly.module.scss'
import { NatureContext } from '../contexts/natureContext'

export default function Home() {
  const TITLE = 'Patterns in Nature'
>>>>>>> Stashed changes
>>>>>>> dev
  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>

      <Layout>
<<<<<<< HEAD
        <div className={styles['container']}>
          <ImageGrid set={'nature'} imageList={ NATURE_IMAGES } />
=======
<<<<<<< Updated upstream
        <div className={styles['container-fluid']}>
          <div className={styles['grid-container']}>
            <div className={styles['grid-item']}></div>
            <div className={styles['grid-item']}></div>
            <div className={styles['grid-item']}></div>
            <div className={styles['grid-item']}></div>
            <div className={styles['grid-item']}></div>
          </div>
=======
        <div className={styles['container']}>
          <ImageGrid context={ NatureContext } />
>>>>>>> Stashed changes
>>>>>>> dev
        </div>
      </Layout>
    </>
  )
}
