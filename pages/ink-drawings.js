import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Assembly.module.scss'

import BabyBlue from '../public/images/ink/Baby Blue.jpg'
import Venus from '../public/images/ink/Birth of Venus Flytrap.jpg'
import BreakfastDinner from '../public/images/ink/Breakfast for Dinner.jpg'
import BugOut from '../public/images/ink/Bug Out.jpg'
import Cand1d from '../public/images/ink/Cand1d.jpg'
import DripPick from '../public/images/ink/Drip Pick.jpg'

export default function InkDrawings() {
  const TITLE = 'Ink Drawings'
  const INK_IMAGES = [
    BabyBlue,
    Venus,
    BreakfastDinner,
    BugOut,
    Cand1d,
    DripPick,
  ]

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
