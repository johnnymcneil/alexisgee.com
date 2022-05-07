import Head from 'next/head'
import ImageGrid from '../components/imageGrid'
import Layout from '../components/layout'
import styles from '../styles/Assembly.module.scss'

<<<<<<< HEAD

export default function InkDrawings() {
  const TITLE = 'Ink Drawings'
  const INK_IMAGES = [
    'Alien_Baby.jpg',
    'Big_Titty_Alien.jpg',
    'Daliesque.jpg',
    'Pickle_Drip.jpg',
    'Pig_at_da_Club.jpg',
    'Wormin_Out.jpg'
  ]
=======
import BabyBlue from '../public/images/ink/Baby Blue.jpg'
import Venus from '../public/images/ink/Birth of Venus Flytrap.jpg'
import BreakfastDinner from '../public/images/ink/Breakfast for Dinner.jpg'
import BugOut from '../public/images/ink/Bug Out.jpg'
import Cand1d from '../public/images/ink/Cand1d.jpg'
import DripPick from '../public/images/ink/Drip Pick.jpg'

export default function InkDrawings() {
  const TITLE = 'Ink Drawings'
<<<<<<< Updated upstream
  const INK_IMAGES = [
    BabyBlue,
    Venus,
    BreakfastDinner,
    BugOut,
    Cand1d,
    DripPick,
  ]
=======
>>>>>>> Stashed changes
>>>>>>> dev

  return (
    <>
      <Head>
        <title>{ TITLE } by Alexis Gee</title>
      </Head>

      <Layout>
        <div className={styles['container']}>
          <ImageGrid set={'ink'} imageList={ INK_IMAGES } />
        </div>
      </Layout>
    </>
  )
}
