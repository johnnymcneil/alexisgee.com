import styles from './neu.module.scss'

export default function NeuButton({ props, active, children }) {
  return (
    <div className={[styles['neu-btn'], active ? styles['neu-btn-active'] : ''].join(' ')} {...props}>
      {children}
    </div>
  )
}