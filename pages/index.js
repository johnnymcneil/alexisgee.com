import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const title = 'Patterns in Nature'
  return (
    <>
      <Head>
        <title>{title} by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles['container-fluid']}>
          <div className={styles['grid-container']}>
            <div className={styles['grid-item']}></div>
            <div className={styles['grid-item']}></div>
            <div className={styles['grid-item']}></div>
            <div className={styles['grid-item']}></div>
            <div className={styles['grid-item']}></div>
          </div>
        </div>
      </Layout>
    </>
  )
}
