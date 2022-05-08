import Head from 'next/head'
import Layout from '../components/layout'
import Grid from '../components/grid'
import { ModalFactory } from '../components/modalFactory'

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
          <Grid context={ GraphicContext } />
        </div>
      </Layout>
      <ModalFactory context={ GraphicContext } />
    </>
  )
}
