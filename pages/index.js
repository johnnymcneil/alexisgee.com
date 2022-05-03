import Head from 'next/head'
import ImageGrid from '../components/imageGrid'
import Layout from '../components/layout'
import styles from '../styles/Assembly.module.scss'
import importImages from '../functions/importImages'

export default function Home() {
  const TITLE = 'Patterns in Nature'  
  const NATURE_IMAGES = importImages(require.context('../assets/nature', false, /\.(png|jpe?g|svg)$/))

  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles['container']}>
          <ImageGrid imageSet={ NATURE_IMAGES } />
        </div>
      </Layout>
    </>
  )
}
