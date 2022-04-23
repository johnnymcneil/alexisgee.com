import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

export default function GraphicPatterns() {
  const title = 'Graphic Patterns'
  return (
    <>
      <Head>
        <title>{title} by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles.container}>
          <div className={styles['grid-container']}>
            <div className={styles['grid-item-blue']}></div>
            <div className={styles['grid-item-blue']}></div>
            <div className={styles['grid-item-blue']}></div>
            <div className={styles['grid-item-blue']}></div>
            <div className={styles['grid-item-blue']}></div>
          </div>
        </div>
      </Layout>
    </>
  )
}
