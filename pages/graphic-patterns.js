import Head from 'next/head'
import Layout from '../components/layout'
import ImageGrid from '../components/imageGrid'

import styles from '../styles/Home.module.scss'
import { GraphicContext } from '../contexts/graphicContext'


export default function GraphicPatterns() {
  const TITLE = 'Graphic Patterns'

  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles['container']}>
          <ImageGrid context={ GraphicContext } />
        </div>
      </Layout>
    </>
  )
}
