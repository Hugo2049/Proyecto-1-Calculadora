import styles from './Display.module.css'

const Display = ({ value }) => (
  <div className={styles.displayContainer}>
    <div className={styles.displayContent}>
      {value}
    </div>
  </div>
)

export default Display