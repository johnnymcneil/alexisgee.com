import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.scss'
import NeuNav from './neumorphism/NeuNav';
import NeuNavItem from './neumorphism/NeuNavItem';

export default function Layout({ children, home }) {
  const title = "Art by Alexis Gee";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Alexis Gee's portfolio of NFT art." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['container-fluid']}>
        <div className={styles.header}>
          <h1 className={styles['header-title'] + ' pt-5 px-5'}>{title}</h1>
          <div className={styles['header-nav']}>
            <NeuNav>
              <NeuNavItem href="/">Patterns in Nature</NeuNavItem>
              <NeuNavItem href="/graphic-patterns">Graphic Patterns</NeuNavItem>
              <NeuNavItem href="/ink-drawings">Ink Drawings</NeuNavItem>
            </NeuNav>
          </div>
        </div>
      </div>
      <main>
        { children }
      </main>
    </>
  )
}