import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

export default function InkDrawings() {
  const title = 'Ink Drawings'
  return (
    <>
      <Head>
        <title>{title} by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles.container}>
          <div className={styles['grid-container']}>
            <div className={styles['grid-item-red']}></div>
            <div className={styles['grid-item-red']}></div>
            <div className={styles['grid-item-red']}></div>
            <div className={styles['grid-item-red']}></div>
            <div className={styles['grid-item-red']}></div>
          </div>
        </div>
      </Layout>
    </>
  )
}
