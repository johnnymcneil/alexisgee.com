import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

export default function GraphicPatterns() {
  const TITLE = 'Graphic Patterns'
<<<<<<< Updated upstream
  const GRAPHIC_IMAGES = [
    '3lectric Alley.jpg',
    'High Noon.jpg',
    'Occult Icon.jpg',
    'Rhombus.jpg',
    'Saturday Morning.jpg',
    'Tin Ceiling.jpg',
    'Yule Fool.jpg',
  ]
=======
>>>>>>> Stashed changes

  return (
    <>
      <Head>
        <title>{title} by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles.container}>
          <div className={styles['grid-container']}>
            <div className={styles['grid-item-blue']}></div>
            <div className={styles['grid-item-blue']}></div>
            <div className={styles['grid-item-blue']}></div>
            <div className={styles['grid-item-blue']}></div>
            <div className={styles['grid-item-blue']}></div>
          </div>
        </div>
      </Layout>
    </>
  )
}
