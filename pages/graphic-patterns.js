import Head from 'next/head'
import ImageGrid from '../components/imageGrid'
import Layout from '../components/layout'
import styles from '../styles/Assembly.module.scss'


export default function GraphicPatterns() {
  const TITLE = 'Graphic Patterns'
<<<<<<< HEAD
  const GRAPHIC_IMAGES = [
    '90s.jpg',
    'Halloween_Mandala.jpg',
    'Mandala_1.jpg',
    'Mandala_2.jpg',
    'Mandala_3.jpg',
    'Moar_90s.jpg',
    'Rat_Stallion.jpg',
    'Turkey.jpg'
  ]
=======
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
>>>>>>> dev

  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles['container']}>
          <ImageGrid set={'graphic'} imageList={ GRAPHIC_IMAGES } />
        </div>
      </Layout>
    </>
  )
}
