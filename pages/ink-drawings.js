import Head from 'next/head'
import ImageGrid from '../components/imageGrid'
import Layout from '../components/layout'
import styles from '../styles/Assembly.module.scss'


export default function InkDrawings() {
  const TITLE = 'Ink Drawings'
  const INK_IMAGES = [
    'Alien_Baby.jpg',
    'Big_Titty_Alien.jpg',
    'Daliesque.jpg',
    'Pickle_Drip.jpg',
    'Pig_at_da_Club.jpg',
    'Wormin_Out.jpg'
  ]

  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles['container']}>
          <ImageGrid set={'ink'} imageList={ INK_IMAGES } />
        </div>
      </Layout>
    </>
  )
}
