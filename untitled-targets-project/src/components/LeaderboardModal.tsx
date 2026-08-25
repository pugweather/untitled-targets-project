import { createPortal } from "react-dom"
import { X, RotateCw } from "lucide-react"
import styles from './LeaderboardModal.module.css'

type LeaderboardModalProps = {
    onClose: () => void
    onRestart: () => void
}

export default function LeaderboardModal({onRestart, onClose}: LeaderboardModalProps) {
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
                    <button className={styles.actionButton} onClick={onClose}>
                        <X className={styles.actionIcon} strokeWidth={2.5} />
                    </button>
                    <button className={styles.actionButton} onClick={onRestart}>
                        <RotateCw className={styles.actionIcon} strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </div>
    , node)
}
