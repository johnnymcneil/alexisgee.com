import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from './layout.module.scss'
import NeuNav from './neumorphism/NeuNav'
import NeuNavItem from './neumorphism/NeuNavItem'
import * as d3 from 'd3'

export default function Layout({ children }) {
  const TITLE = "Art by Alexis Gee";

  return (
    <>
      <Head>
        <title>{ TITLE }</title>
        <meta name="description" content="Alexis Gee's portfolio of NFT art." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.page}>
        
        <div className={styles['container']}>
          <div className={styles.header}>
            <div id="title-block" className={styles['header-title']}>
              <h1 id="alexis-gee" className={styles['title-anim']}>{TITLE}</h1>
            </div>
            {/* <Script src={'/scripts/headerAnim.js'} /> */}
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

        <div className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; { new Date().getFullYear() } Alexis Gee.</p>
            <p>Site designed by <a href="https://johnnymcneil.com" target='_blank' rel='noopener noreferrer'>Johnny McNeil.</a></p>
          </div>
        </div>

      </div>
    </>
  )
}