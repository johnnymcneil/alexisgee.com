import Head from 'next/head'
import Layout from '../components/layout'
import ImageGrid from '../components/imageGrid'

import styles from '../styles/Assembly.module.scss'
import { NatureContext } from '../contexts/natureContext'

export default function Home() {
  const TITLE = 'Patterns in Nature'
  
  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles['container']}>
          <ImageGrid context={ NatureContext } />
        </div>
      </Layout>
    </>
  )
}
