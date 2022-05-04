import Link from 'next/link'
import styles from './neu.module.scss'
import NeuLinkButton from './NeuLinkButton'

export default function NeuNavItem({ children, href }) {
  return (
    <div className={styles['neu-nav-item']}>
      <NeuLinkButton href={href}>{children}</NeuLinkButton>
    </div>
  )
}