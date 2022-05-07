import Head from 'next/head'
import Layout from '../components/layout'
import ImageGrid from '../components/imageGrid'

import styles from '../styles/Assembly.module.scss'
import { InkContext } from '../contexts/inkContext'

export default function InkDrawings() {
  const TITLE = 'Ink Drawings'

  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles['container']}>
          <ImageGrid context={ InkContext } />
        </div>
      </Layout>
    </>
  )
}
