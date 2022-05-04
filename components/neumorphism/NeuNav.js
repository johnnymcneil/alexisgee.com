import styles from './neu.module.scss'

export default function NeuNav({ children }) {
  return (
    <nav className={styles['neu-nav']}>
      <div className={styles['neu-nav-list']}>
        {children}
      </div>
    </nav>
  );
}