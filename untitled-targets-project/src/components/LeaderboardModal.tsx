import { createPortal } from "react-dom"
import styles from './LeaderboardModal.module.css'

export default function LeaderboardModal() {
    const node = document.getElementById("modal")
    if (!node) return null
    return createPortal(
        <div className={styles.modalOverlay}>
            <div className={styles.innerModalContainer}>
                <h2 className={styles.modalTitle}>LEADERBOARD</h2>

                <ul className={styles.leaderboardList}>
                    <li className={styles.leaderboardRow}>
                        <span>10/21</span>
                        <span className={styles.rowTime}>33.51</span>
                    </li>
                    <li className={styles.leaderboardRow}>
                        <span>10/21</span>
                        <span className={styles.rowTime}>33.51</span>
                    </li>
                    <li className={styles.leaderboardRow}>
                        <span>10/21</span>
                        <span className={styles.rowTime}>33.51</span>
                    </li>
                    <li className={styles.leaderboardRow}>
                        <span>10/21</span>
                        <span className={styles.rowTime}>33.51</span>
                    </li>
                </ul>

                <div className={styles.buttonsRow}>
                    <button
                        className={styles.actionButton}
                        type="button"
                        aria-label="Close"
                    >
                        <span className={styles.actionIcon}>&times;</span>
                    </button>
                    <button
                        className={styles.actionButton}
                        type="button"
                        aria-label="Restart"
                    >
                        <span className={styles.actionIcon}>&#8634;</span>
                    </button>
                </div>
            </div>
        </div>
    , node)
}
