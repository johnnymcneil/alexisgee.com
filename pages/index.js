import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
<<<<<<< Updated upstream
import styles from '../styles/Home.module.scss'

export default function Home() {
  const TITLE = 'Patterns in Nature'
  const NATURE_IMAGES = [
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
  return (
    <>
      <Head>
        <title>{title} by Alexis Gee</title>
      </Head>

      <Layout>
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
        </div>
      </Layout>
    </>
  )
}
