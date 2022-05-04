import Head from 'next/head'
import ImageGrid from '../components/imageGrid'
import Layout from '../components/layout'
import styles from '../styles/Assembly.module.scss'


export default function Home() {
  const TITLE = 'Patterns in Nature'
  const NATURE_IMAGES = [
    'La_Flama.jpg',
    'Moss_on_Bark.jpg',
    'Red_Flowers.jpg',
    'Succulent.jpg'
  ]

  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles['container']}>
          <ImageGrid set={'nature'} imageList={ NATURE_IMAGES } />
        </div>
      </Layout>
    </>
  )
}
