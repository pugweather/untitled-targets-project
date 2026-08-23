import styles from './Gameboard.module.css'

export default function GameBoard() {
  return (
    <div className={styles.page}>
      <div className={styles.board}>
        <div
          className={`${styles.target} ${styles.step0}`}
          style={{ left: '12%', top: '76%' }}
        />
        <div
          className={`${styles.target} ${styles.step1}`}
          style={{ left: '22%', top: '28%' }}
        />
        <div
          className={`${styles.target} ${styles.step2}`}
          style={{ left: '38%', top: '16%' }}
        />
        <div
          className={`${styles.target} ${styles.step3}`}
          style={{ left: '55%', top: '35%' }}
        />
        <div
          className={`${styles.target} ${styles.step4}`}
          style={{ left: '72%', top: '22%' }}
        />
        <div
          className={`${styles.target} ${styles.hidden}`}
          style={{ left: '86%', top: '55%' }}
        />
        <div
          className={`${styles.target} ${styles.hidden}`}
          style={{ left: '66%', top: '76%' }}
        />
      </div>
    </div>
  )
}
