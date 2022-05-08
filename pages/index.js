import Head from 'next/head'
import Layout from '../components/layout'
import Grid from '../components/grid'

import styles from '../styles/Assembly.module.scss'

import { NatureContext } from '../contexts/natureContext'
import { ModalFactory } from '../components/modalFactory'

export default function Home() {
  const TITLE = 'Patterns in Nature'

  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>
      <Layout>
        <div className={styles['container']}>
          <Grid context={ NatureContext } />
        </div>
      </Layout>
      <ModalFactory context={ NatureContext } />
    </>
  )
}
